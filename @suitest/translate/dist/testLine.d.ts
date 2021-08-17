import { TestLineNode } from '@suitest/smst/types/unistTestLine';
import { AppConfiguration, Elements, Snippets, TestLine, TestLineResult, QueryLine, QueryLineError } from '@suitest/types';
export declare const translateTestLine: ({ testLine, appConfig, elements, snippets, lineResult, }: {
    testLine: TestLine | QueryLine;
    appConfig?: AppConfiguration | undefined;
    elements?: Elements | undefined;
    snippets?: Snippets | undefined;
    lineResult?: import("@suitest/types").TestLineSuccessResult | import("@suitest/types").TestLineExcludedResult | import("@suitest/types").TestLineAbortedResult | import("@suitest/types").SimpleError | import("@suitest/types").OutdatedInstrumentationLibraryError | import("@suitest/types").QueryTimeoutError | import("@suitest/types").SyntaxError | (import("@suitest/types").BaseResult & {
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
    }) | (import("@suitest/types").BaseResult & import("@suitest/types").QueryFailedNetworkError) | import("@suitest/types").InvalidValueError | import("@suitest/types").InvalidVariableError | import("@suitest/types").InvalidResultError | import("@suitest/types").InvalidRepositoryReferenceError | import("@suitest/types").InvalidReferenceError | import("@suitest/types").OpenAppOverrideFailedError | import("@suitest/types").InvalidPackageError | import("@suitest/types").ADBError | import("@suitest/types").NotAllowedPrivilegesError | QueryLineError | undefined;
}) => TestLineNode;
