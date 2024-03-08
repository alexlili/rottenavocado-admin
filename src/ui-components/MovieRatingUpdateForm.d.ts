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
export declare type MovieRatingUpdateFormInputValues = {
    movieId?: string;
    userId?: string;
    rate?: number;
};
export declare type MovieRatingUpdateFormValidationValues = {
    movieId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MovieRatingUpdateFormOverridesProps = {
    MovieRatingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    movieId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MovieRatingUpdateFormProps = React.PropsWithChildren<{
    overrides?: MovieRatingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    movieRating?: any;
    onSubmit?: (fields: MovieRatingUpdateFormInputValues) => MovieRatingUpdateFormInputValues;
    onSuccess?: (fields: MovieRatingUpdateFormInputValues) => void;
    onError?: (fields: MovieRatingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MovieRatingUpdateFormInputValues) => MovieRatingUpdateFormInputValues;
    onValidate?: MovieRatingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MovieRatingUpdateForm(props: MovieRatingUpdateFormProps): React.ReactElement;
