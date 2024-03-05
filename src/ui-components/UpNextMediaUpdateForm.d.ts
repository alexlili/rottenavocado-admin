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
export declare type UpNextMediaUpdateFormInputValues = {
    coverImage?: string;
    profileImage?: string;
    title?: string;
};
export declare type UpNextMediaUpdateFormValidationValues = {
    coverImage?: ValidationFunction<string>;
    profileImage?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpNextMediaUpdateFormOverridesProps = {
    UpNextMediaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coverImage?: PrimitiveOverrideProps<TextFieldProps>;
    profileImage?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpNextMediaUpdateFormProps = React.PropsWithChildren<{
    overrides?: UpNextMediaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    upNextMedia?: any;
    onSubmit?: (fields: UpNextMediaUpdateFormInputValues) => UpNextMediaUpdateFormInputValues;
    onSuccess?: (fields: UpNextMediaUpdateFormInputValues) => void;
    onError?: (fields: UpNextMediaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpNextMediaUpdateFormInputValues) => UpNextMediaUpdateFormInputValues;
    onValidate?: UpNextMediaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UpNextMediaUpdateForm(props: UpNextMediaUpdateFormProps): React.ReactElement;
