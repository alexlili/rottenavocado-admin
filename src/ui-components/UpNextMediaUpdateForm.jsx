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
import { getUpNextMedia } from "../graphql/queries";
import { updateUpNextMedia } from "../graphql/mutations";
const client = generateClient();
export default function UpNextMediaUpdateForm(props) {
  const {
    id: idProp,
    upNextMedia: upNextMediaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    coverImage: "",
    profileImage: "",
    title: "",
  };
  const [coverImage, setCoverImage] = React.useState(initialValues.coverImage);
  const [profileImage, setProfileImage] = React.useState(
    initialValues.profileImage
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = upNextMediaRecord
      ? { ...initialValues, ...upNextMediaRecord }
      : initialValues;
    setCoverImage(cleanValues.coverImage);
    setProfileImage(cleanValues.profileImage);
    setTitle(cleanValues.title);
    setErrors({});
  };
  const [upNextMediaRecord, setUpNextMediaRecord] =
    React.useState(upNextMediaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUpNextMedia.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUpNextMedia
        : upNextMediaModelProp;
      setUpNextMediaRecord(record);
    };
    queryData();
  }, [idProp, upNextMediaModelProp]);
  React.useEffect(resetStateValues, [upNextMediaRecord]);
  const validations = {
    coverImage: [],
    profileImage: [],
    title: [],
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
          coverImage: coverImage ?? null,
          profileImage: profileImage ?? null,
          title: title ?? null,
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
            query: updateUpNextMedia.replaceAll("__typename", ""),
            variables: {
              input: {
                id: upNextMediaRecord.id,
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
      {...getOverrideProps(overrides, "UpNextMediaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cover image"
        isRequired={false}
        isReadOnly={false}
        value={coverImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coverImage: value,
              profileImage,
              title,
            };
            const result = onChange(modelFields);
            value = result?.coverImage ?? value;
          }
          if (errors.coverImage?.hasError) {
            runValidationTasks("coverImage", value);
          }
          setCoverImage(value);
        }}
        onBlur={() => runValidationTasks("coverImage", coverImage)}
        errorMessage={errors.coverImage?.errorMessage}
        hasError={errors.coverImage?.hasError}
        {...getOverrideProps(overrides, "coverImage")}
      ></TextField>
      <TextField
        label="Profile image"
        isRequired={false}
        isReadOnly={false}
        value={profileImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coverImage,
              profileImage: value,
              title,
            };
            const result = onChange(modelFields);
            value = result?.profileImage ?? value;
          }
          if (errors.profileImage?.hasError) {
            runValidationTasks("profileImage", value);
          }
          setProfileImage(value);
        }}
        onBlur={() => runValidationTasks("profileImage", profileImage)}
        errorMessage={errors.profileImage?.errorMessage}
        hasError={errors.profileImage?.hasError}
        {...getOverrideProps(overrides, "profileImage")}
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
              coverImage,
              profileImage,
              title: value,
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
          isDisabled={!(idProp || upNextMediaModelProp)}
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
              !(idProp || upNextMediaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
