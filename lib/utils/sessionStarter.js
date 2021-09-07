const sessionConstants = require('../constants/session');
const {AUTOMATED, TOKEN} = require('../constants/modes');
const chainPromise = require('./chainPromise');
const {validate, validators} = require('../validation');
const {captureException} = require('./sentry/Raven');
const wsContentTypes = require('../api/wsContentTypes');
const envVars = require('../constants/enviroment');
const messageId = require('../constants/ipcMessageId');
const ipcClient = require('../testLauncher/ipc/client');
const {pick} = require('ramda');
const {replWarnInteractive} = require('../texts');

// Unchained commands
const {openSessionUnchained: openSession} = require('../commands/openSession');
const {pairDeviceUnchained: pairDevice} = require('../commands/pairDevice');
const {setAppConfigUnchained: setAppConfig} = require('../commands/setAppConfig');

/**
 * Connect child process to launcher IPC server
 * @param {number} port - port number
 * @returns {Promise<Object>} - config object
 */
/* istanbul ignore next */
const connectToMasterIpc = (port) => {
	ipcClient.connect(port);

	// Wait for 'SETUP_SESSION' message from master with config object, then resolve
	return new Promise(resolve => {
		ipcClient.addListener(messageId.SETUP_SESSION, data => {
			resolve(data.config);
		});
	});
};

/**
 * Start automated or interactive session based on config
 * @param {Object} suitest instance
 * @param {string} deviceId
 * @param {Object} generalConfig
 */
const bootstrapSession = async(suitest, {deviceId, config}, generalConfig) => {
	try {
		// Run automated session
		// TODO: fix after removing interactive and automated modes
		if (generalConfig.sessionType === AUTOMATED) {
			validate(validators.SESSION_BOOTSTRAP_AUTOMATED, generalConfig, 'suitest automated config');
			await openSession(
				suitest,
				{sessionToken: generalConfig.sessionToken},
				sessionConstants.AUTOMATED,
			);
			const pairDeviceResult = await pairDevice(suitest, deviceId);

			suitest.appContext.setContext(pick(['appId', 'versionId', 'configId'], pairDeviceResult));
			suitest.interactive = () => {
				suitest.logger.warn(replWarnInteractive());

				return Promise.resolve();
			};

			return;
		} else if (generalConfig.sessionType === TOKEN) {
			await openSession(
				suitest,
				{token: generalConfig.token},
				sessionConstants.TOKEN,
			);

			await setAppConfig(suitest, config);
			const pairDeviceResult = await pairDevice(suitest, deviceId, config);

			suitest.appContext.setContext(
				pick(['appId', 'versionId', 'configId'], pairDeviceResult),
				undefined,
				undefined,
				generalConfig.token,
			);
			suitest.interactive = () => {
				suitest.logger.warn(replWarnInteractive());

				return Promise.resolve();
			};

			return;
		}

		// Run interactive session
		// TODO: fix after removing interactive and automated modes
		validate(validators.SESSION_BOOTSTRAP_INTERACTIVE, generalConfig, 'suitest intaractive config');
		await openSession(
			suitest,
			{sessionToken: generalConfig.sessionToken},
			sessionConstants.INTERACTIVE,
		);
		if (generalConfig.isDebugMode) {
			await suitest.webSockets.send({type: wsContentTypes.enableDebugMode});
		}
		// add interactive command only to child process instance and if mode is interactive
		suitest.interactive = require('../../lib/commands/interactive');
		await pairDevice(suitest, deviceId);
		await setAppConfig(suitest, generalConfig.appConfigId);
	} catch (error) {
		await captureException(error);
		// copy of handleLauncherError not imported to avoid cycle dependencies
		if (error.exit) {
			error.exit(1, suitest.logger);
		} else {
			suitest.logger.error(error);
			process.exit(1);
		}
	}
};

/**
 * Check if SUITEST_CHILD_PROCESS env var present,
 * it contains deviceId and master process ipc port number,
 * connect to master, get config, override current config and bootstrap session
 */
/* istanbul ignore next */
const connectToIpcAndBootstrapSession = async(suitest) => {
	if (process.env[envVars.SUITEST_CHILD_PROCESS]) {
		const [deviceId, config, ipcPort] = process.env[envVars.SUITEST_CHILD_PROCESS].split('|');

		const generalConfig = await connectToMasterIpc(ipcPort);

		suitest.configuration.extend(generalConfig);

		await bootstrapSession(suitest, {deviceId, config}, generalConfig);
	}
};

module.exports = {
	bootstrapSession,
	connectToIpcAndBootstrapSession: chainPromise(connectToIpcAndBootstrapSession),
};
