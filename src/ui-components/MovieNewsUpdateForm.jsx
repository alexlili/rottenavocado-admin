/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMovieNews } from "../graphql/queries";
import { updateMovieNews } from "../graphql/mutations";
const client = generateClient();
export default function MovieNewsUpdateForm(props) {
  const {
    id: idProp,
    movieNews: movieNewsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image: "",
    title: "",
    detail: "",
    publishInfo: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [title, setTitle] = React.useState(initialValues.title);
  const [detail, setDetail] = React.useState(initialValues.detail);
  const [publishInfo, setPublishInfo] = React.useState(
    initialValues.publishInfo
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = movieNewsRecord
      ? { ...initialValues, ...movieNewsRecord }
      : initialValues;
    setImage(cleanValues.image);
    setTitle(cleanValues.title);
    setDetail(cleanValues.detail);
    setPublishInfo(cleanValues.publishInfo);
    setErrors({});
  };
  const [movieNewsRecord, setMovieNewsRecord] =
    React.useState(movieNewsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMovieNews.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMovieNews
        : movieNewsModelProp;
      setMovieNewsRecord(record);
    };
    queryData();
  }, [idProp, movieNewsModelProp]);
  React.useEffect(resetStateValues, [movieNewsRecord]);
  const validations = {
    image: [],
    title: [],
    detail: [],
    publishInfo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          image: image ?? null,
          title: title ?? null,
          detail: detail ?? null,
          publishInfo: publishInfo ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateMovieNews.replaceAll("__typename", ""),
            variables: {
              input: {
                id: movieNewsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MovieNewsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image: value,
              title,
              detail,
              publishInfo,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              title: value,
              detail,
              publishInfo,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Detail"
        isRequired={false}
        isReadOnly={false}
        value={detail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              title,
              detail: value,
              publishInfo,
            };
            const result = onChange(modelFields);
            value = result?.detail ?? value;
          }
          if (errors.detail?.hasError) {
            runValidationTasks("detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("detail", detail)}
        errorMessage={errors.detail?.errorMessage}
        hasError={errors.detail?.hasError}
        {...getOverrideProps(overrides, "detail")}
      ></TextField>
      <TextField
        label="Publish info"
        isRequired={false}
        isReadOnly={false}
        value={publishInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              title,
              detail,
              publishInfo: value,
            };
            const result = onChange(modelFields);
            value = result?.publishInfo ?? value;
          }
          if (errors.publishInfo?.hasError) {
            runValidationTasks("publishInfo", value);
          }
          setPublishInfo(value);
        }}
        onBlur={() => runValidationTasks("publishInfo", publishInfo)}
        errorMessage={errors.publishInfo?.errorMessage}
        hasError={errors.publishInfo?.hasError}
        {...getOverrideProps(overrides, "publishInfo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || movieNewsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || movieNewsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
