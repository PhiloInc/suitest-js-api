import { Translation } from './types';
import { ProgressStatus, NotStartedReason } from './constants';
/**
 * @description Get humanized progress status explanation result
 * @throws {Error} Throws an Error if unknown status is provided or code is required and missing
 */
export declare function translateProgress(message: ProgressMessage): Translation;
declare type ProgressMessage = {
    code?: NotStartedReason;
    status?: ProgressStatus;
};
export {};
