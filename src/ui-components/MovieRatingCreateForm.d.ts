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
export declare type MovieRatingCreateFormInputValues = {
    movieId?: string;
    userId?: string;
    rate?: number;
};
export declare type MovieRatingCreateFormValidationValues = {
    movieId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieRatingCreateFormOverridesProps = {
    MovieRatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    movieId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MovieRatingCreateFormProps = React.PropsWithChildren<{
    overrides?: MovieRatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MovieRatingCreateFormInputValues) => MovieRatingCreateFormInputValues;
    onSuccess?: (fields: MovieRatingCreateFormInputValues) => void;
    onError?: (fields: MovieRatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MovieRatingCreateFormInputValues) => MovieRatingCreateFormInputValues;
    onValidate?: MovieRatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function MovieRatingCreateForm(props: MovieRatingCreateFormProps): React.ReactElement;
