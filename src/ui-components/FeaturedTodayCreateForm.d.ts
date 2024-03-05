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
export declare type FeaturedTodayCreateFormInputValues = {
    backgroundImage?: string;
    people?: string;
    title?: string;
    photographerInfo?: string;
};
export declare type FeaturedTodayCreateFormValidationValues = {
    backgroundImage?: ValidationFunction<string>;
    people?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    photographerInfo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedTodayCreateFormOverridesProps = {
    FeaturedTodayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    backgroundImage?: PrimitiveOverrideProps<TextFieldProps>;
    people?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    photographerInfo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedTodayCreateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedTodayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeaturedTodayCreateFormInputValues) => FeaturedTodayCreateFormInputValues;
    onSuccess?: (fields: FeaturedTodayCreateFormInputValues) => void;
    onError?: (fields: FeaturedTodayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedTodayCreateFormInputValues) => FeaturedTodayCreateFormInputValues;
    onValidate?: FeaturedTodayCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedTodayCreateForm(props: FeaturedTodayCreateFormProps): React.ReactElement;
