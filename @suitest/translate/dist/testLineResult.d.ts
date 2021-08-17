import { TestLineResultNode } from '@suitest/smst/types/unistTestLine';
import { TestLineResult, SyntaxError, QueryTimeoutError, DeviceError, UnsupportedButtonError, AbortedError, InvalidVariableError, InvalidValueError, InvalidResultError, InvalidReferenceError, ADBError, InvalidPackageError, OutdatedInstrumentationLibraryError, InvalidRepositoryReferenceError, TestLineErrorResult, QueryFailedInvalidUrl, TestLine, AppConfiguration, Elements, Snippets, SimpleError, QueryLine, QueryLineError, NotAllowedPrivilegesError } from '@suitest/types';
export declare const translateResultErrorMessage: (result: TestLineErrorResult) => Node;
export declare const translateTestLineResult: (options: {
    testLine: TestLine | QueryLine;
    appConfig?: AppConfiguration | undefined;
    lineResult?: import("@suitest/types").TestLineSuccessResult | import("@suitest/types").TestLineExcludedResult | import("@suitest/types").TestLineAbortedResult | SimpleError | OutdatedInstrumentationLibraryError | QueryTimeoutError | SyntaxError | (import("@suitest/types").BaseResult & {
        errorType: "invalidInput";
        message?: {
            code: "wrongExpression" | "lineTypeNotSupported" | "elementNotSupported";
        } | undefined;
    }) | (import("@suitest/types").BaseResult & {
        errorType: "invalidInput";
        expression: import("@suitest/types").ResultExpression;
    }) | DeviceError | UnsupportedButtonError | AbortedError | (import("@suitest/types").BaseResult & QueryFailedInvalidUrl) | (import("@suitest/types").BaseResult & {
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
    }) | (import("@suitest/types").BaseResult & import("@suitest/types").QueryFailedNetworkError) | InvalidValueError | InvalidVariableError | InvalidResultError | InvalidRepositoryReferenceError | InvalidReferenceError | import("@suitest/types").OpenAppOverrideFailedError | InvalidPackageError | ADBError | NotAllowedPrivilegesError | QueryLineError | undefined;
    elements?: Elements | undefined;
    snippets?: Snippets | undefined;
}) => TestLineResultNode;
