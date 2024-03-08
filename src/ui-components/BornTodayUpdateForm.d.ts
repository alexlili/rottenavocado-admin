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
export declare type BornTodayUpdateFormInputValues = {
    avatarImage?: string;
    name?: string;
    age?: string;
};
export declare type BornTodayUpdateFormValidationValues = {
    avatarImage?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BornTodayUpdateFormOverridesProps = {
    BornTodayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    avatarImage?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BornTodayUpdateFormProps = React.PropsWithChildren<{
    overrides?: BornTodayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bornToday?: any;
    onSubmit?: (fields: BornTodayUpdateFormInputValues) => BornTodayUpdateFormInputValues;
    onSuccess?: (fields: BornTodayUpdateFormInputValues) => void;
    onError?: (fields: BornTodayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BornTodayUpdateFormInputValues) => BornTodayUpdateFormInputValues;
    onValidate?: BornTodayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BornTodayUpdateForm(props: BornTodayUpdateFormProps): React.ReactElement;
