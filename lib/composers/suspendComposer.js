const {makeModifierComposer} = require('../utils/makeComposer');
const composers = require('../constants/composer');

/**
 * Defined suspend method
 */
const suspendComposer = makeModifierComposer(composers.SUSPEND_APP, ['suspend'], (_, meta) => ({
	...meta,
	isSuspended: true,
}));

module.exports = suspendComposer;
