import { AppConfiguration, InvalidRepositoryReferenceError, TestLine, QueryLine } from '@suitest/types';
/**
 * Replace variables in text
 * @param text - text to replace variables in
 * @param variables - array of configuration variables
 */
export declare const replaceVariables: (text: string, variables?: {
    key: string;
    value: string;
}[] | undefined) => string;
/**
 * Replace variables and format the output to display both replaced and not replaced strings
 */
export declare const formatVariables: (text: string, variables?: {
    key: string;
    value: string;
}[] | undefined) => JSX.Element;
/**
 * Replace variable and output timeout value as unist node
 */
export declare const formatTimeout: (timeout: number | string, variables?: {
    key: string;
    value: string;
}[] | undefined) => JSX.Element;
export declare const formatCount: (count: number | string, variables?: {
    key: string;
    value: string;
}[] | undefined) => JSX.Element;
export declare const deviceOrientationsMap: {
    portrait: string;
    portraitReversed: string;
    landscapeReversed: string;
    landscape: string;
};
export declare const translateCodeProp: (name: Node, code: string, appConfig?: AppConfiguration | undefined, comparator?: string | undefined, status?: "success" | "fail" | undefined) => JSX.Element[];
export declare const shouldElMatchDetailsBeHidden: (result?: import("@suitest/types").TestLineSuccessResult | import("@suitest/types").TestLineExcludedResult | import("@suitest/types").TestLineAbortedResult | import("@suitest/types").SimpleError | import("@suitest/types").OutdatedInstrumentationLibraryError | import("@suitest/types").QueryTimeoutError | import("@suitest/types").SyntaxError | (import("@suitest/types").BaseResult & {
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
}) | (import("@suitest/types").BaseResult & import("@suitest/types").QueryFailedNetworkError) | import("@suitest/types").InvalidValueError | import("@suitest/types").InvalidVariableError | import("@suitest/types").InvalidResultError | InvalidRepositoryReferenceError | import("@suitest/types").InvalidReferenceError | import("@suitest/types").OpenAppOverrideFailedError | import("@suitest/types").InvalidPackageError | import("@suitest/types").ADBError | import("@suitest/types").NotAllowedPrivilegesError | undefined) => boolean;
export declare const mapStatus: (status?: "success" | "fail" | "warning" | "exit" | "fatal" | "excluded" | "aborted" | undefined, inverse?: boolean | undefined) => SingleEntryStatus | undefined;
export declare const getDocsLink: (line: TestLine | QueryLine) => string | undefined;
