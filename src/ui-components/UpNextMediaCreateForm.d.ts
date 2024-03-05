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
export declare type UpNextMediaCreateFormInputValues = {
    coverImage?: string;
    profileImage?: string;
    title?: string;
};
export declare type UpNextMediaCreateFormValidationValues = {
    coverImage?: ValidationFunction<string>;
    profileImage?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpNextMediaCreateFormOverridesProps = {
    UpNextMediaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coverImage?: PrimitiveOverrideProps<TextFieldProps>;
    profileImage?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpNextMediaCreateFormProps = React.PropsWithChildren<{
    overrides?: UpNextMediaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UpNextMediaCreateFormInputValues) => UpNextMediaCreateFormInputValues;
    onSuccess?: (fields: UpNextMediaCreateFormInputValues) => void;
    onError?: (fields: UpNextMediaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpNextMediaCreateFormInputValues) => UpNextMediaCreateFormInputValues;
    onValidate?: UpNextMediaCreateFormValidationValues;
} & React.CSSProperties>;
export default function UpNextMediaCreateForm(props: UpNextMediaCreateFormProps): React.ReactElement;
