import { Translation } from './types';
import { NotStartedReason } from './constants';
/**
 * @description Translate the reason for test not being executed
 * @throws {Error} Throws an Error if unknown code is provided
 */
export declare function translateNotStartedReason(code: NotStartedReason): Translation;
