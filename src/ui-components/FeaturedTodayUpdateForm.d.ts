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
export declare type FeaturedTodayUpdateFormInputValues = {
    backgroundImage?: string;
    people?: string;
    title?: string;
    photographerInfo?: string;
};
export declare type FeaturedTodayUpdateFormValidationValues = {
    backgroundImage?: ValidationFunction<string>;
    people?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    photographerInfo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedTodayUpdateFormOverridesProps = {
    FeaturedTodayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    backgroundImage?: PrimitiveOverrideProps<TextFieldProps>;
    people?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    photographerInfo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturedTodayUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeaturedTodayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    featuredToday?: any;
    onSubmit?: (fields: FeaturedTodayUpdateFormInputValues) => FeaturedTodayUpdateFormInputValues;
    onSuccess?: (fields: FeaturedTodayUpdateFormInputValues) => void;
    onError?: (fields: FeaturedTodayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturedTodayUpdateFormInputValues) => FeaturedTodayUpdateFormInputValues;
    onValidate?: FeaturedTodayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturedTodayUpdateForm(props: FeaturedTodayUpdateFormProps): React.ReactElement;
