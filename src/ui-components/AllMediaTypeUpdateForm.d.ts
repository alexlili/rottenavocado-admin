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
export declare type AllMediaTypeUpdateFormInputValues = {
    typeArray?: string;
};
export declare type AllMediaTypeUpdateFormValidationValues = {
    typeArray?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AllMediaTypeUpdateFormOverridesProps = {
    AllMediaTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    typeArray?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AllMediaTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AllMediaTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    allMediaType?: any;
    onSubmit?: (fields: AllMediaTypeUpdateFormInputValues) => AllMediaTypeUpdateFormInputValues;
    onSuccess?: (fields: AllMediaTypeUpdateFormInputValues) => void;
    onError?: (fields: AllMediaTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AllMediaTypeUpdateFormInputValues) => AllMediaTypeUpdateFormInputValues;
    onValidate?: AllMediaTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AllMediaTypeUpdateForm(props: AllMediaTypeUpdateFormProps): React.ReactElement;
