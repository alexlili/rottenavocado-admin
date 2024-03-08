/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BornTodayCreateFormInputValues = {
    avatarImage?: string;
    name?: string;
    age?: string;
};
export declare type BornTodayCreateFormValidationValues = {
    avatarImage?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BornTodayCreateFormOverridesProps = {
    BornTodayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    avatarImage?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BornTodayCreateFormProps = React.PropsWithChildren<{
    overrides?: BornTodayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BornTodayCreateFormInputValues) => BornTodayCreateFormInputValues;
    onSuccess?: (fields: BornTodayCreateFormInputValues) => void;
    onError?: (fields: BornTodayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BornTodayCreateFormInputValues) => BornTodayCreateFormInputValues;
    onValidate?: BornTodayCreateFormValidationValues;
} & React.CSSProperties>;
export default function BornTodayCreateForm(props: BornTodayCreateFormProps): React.ReactElement;
