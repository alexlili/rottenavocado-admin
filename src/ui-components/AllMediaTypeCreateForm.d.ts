/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type AllMediaTypeCreateFormInputValues = {
    typeArray?: string;
};
export declare type AllMediaTypeCreateFormValidationValues = {
    typeArray?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AllMediaTypeCreateFormOverridesProps = {
    AllMediaTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    typeArray?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AllMediaTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: AllMediaTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AllMediaTypeCreateFormInputValues) => AllMediaTypeCreateFormInputValues;
    onSuccess?: (fields: AllMediaTypeCreateFormInputValues) => void;
    onError?: (fields: AllMediaTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AllMediaTypeCreateFormInputValues) => AllMediaTypeCreateFormInputValues;
    onValidate?: AllMediaTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function AllMediaTypeCreateForm(props: AllMediaTypeCreateFormProps): React.ReactElement;
