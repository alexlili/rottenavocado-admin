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
export declare type MovieCreateFormInputValues = {
    director?: string;
    actor?: string;
    name?: string;
    year?: string;
    imageList?: string;
    introduction?: string;
};
export declare type MovieCreateFormValidationValues = {
    director?: ValidationFunction<string>;
    actor?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    imageList?: ValidationFunction<string>;
    introduction?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieCreateFormOverridesProps = {
    MovieCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    director?: PrimitiveOverrideProps<TextFieldProps>;
    actor?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    imageList?: PrimitiveOverrideProps<TextFieldProps>;
    introduction?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MovieCreateFormProps = React.PropsWithChildren<{
    overrides?: MovieCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MovieCreateFormInputValues) => MovieCreateFormInputValues;
    onSuccess?: (fields: MovieCreateFormInputValues) => void;
    onError?: (fields: MovieCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MovieCreateFormInputValues) => MovieCreateFormInputValues;
    onValidate?: MovieCreateFormValidationValues;
} & React.CSSProperties>;
export default function MovieCreateForm(props: MovieCreateFormProps): React.ReactElement;
