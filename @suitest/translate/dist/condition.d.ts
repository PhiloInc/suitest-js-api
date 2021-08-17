import { ConditionNode } from '@suitest/smst/types/unistTestLine';
import { Condition, NetworkRequestInfo, AppConfiguration, Elements, QueryFailedNetworkError } from '@suitest/types';
export declare const translateElementProperty: (property: string) => string;
/**
 * Put @status and @method on top, then show headers, then - @body.
 * This order is more familiar to user and closer to HTTP raw request/response.
 *
 * Ordering might be off for headers if variables are used for header names, but that is minor
 */
export declare const sortNetworkInfo: (a: NetworkRequestInfo, b: NetworkRequestInfo) => number;
/**
 * Translate condition part of the test line into SMST
 * "elements" is optional property. BE is going to update results feed to include elements map,
 * but for now it can be omitted
 */
export declare const translateCondition: (condition: Condition, inverse: boolean, appConfig?: AppConfiguration | undefined, elements?: Elements | undefined, lineResult?: import("@suitest/types").TestLineSuccessResult | import("@suitest/types").TestLineExcludedResult | import("@suitest/types").TestLineAbortedResult | import("@suitest/types").SimpleError | import("@suitest/types").OutdatedInstrumentationLibraryError | import("@suitest/types").QueryTimeoutError | import("@suitest/types").SyntaxError | (import("@suitest/types").BaseResult & {
    errorType: "invalidInput";
    message?: {
        code: "wrongExpression" | "lineTypeNotSupported" | "elementNotSupported";
    } | undefined;
}) | (import("@suitest/types").BaseResult & {
    errorType: "invalidInput";
    expression: import("@suitest/types").ResultExpression;
}) | import("@suitest/types").DeviceError | import("@suitest/types").UnsupportedButtonError | import("@suitest/types").AbortedError | (import("@suitest/types").BaseResult & import("@suitest/types").QueryFailedInvalidUrl) | (import("@suitest/types").BaseResult & {
    errorType: "queryFailed";
    message: {
        code: "wrongExpression" | "invalidApp" | "applicationError" | "missingSubject" | "existingSubject" | "orderErr" | "updateAlert" | "notFunction" | "psImplicitVideo";
    };
}) | (import("@suitest/types").BaseResult & {
    errorType: "queryFailed";
    message: {
        code: "exprException";
        info: {
            exception: string;
        };
    };
}) | (import("@suitest/types").BaseResult & {
    errorType: "queryFailed";
    actualValue: string;
    expectedValue: string;
}) | (import("@suitest/types").BaseResult & {
    errorType: "queryFailed";
    expression: import("@suitest/types").ResultExpression;
}) | (import("@suitest/types").BaseResult & QueryFailedNetworkError) | import("@suitest/types").InvalidValueError | import("@suitest/types").InvalidVariableError | import("@suitest/types").InvalidResultError | import("@suitest/types").InvalidRepositoryReferenceError | import("@suitest/types").InvalidReferenceError | import("@suitest/types").OpenAppOverrideFailedError | import("@suitest/types").InvalidPackageError | import("@suitest/types").ADBError | import("@suitest/types").NotAllowedPrivilegesError | undefined) => ConditionNode;
