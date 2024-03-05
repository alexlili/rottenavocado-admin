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
import { getFeaturedToday } from "../graphql/queries";
import { updateFeaturedToday } from "../graphql/mutations";
const client = generateClient();
export default function FeaturedTodayUpdateForm(props) {
  const {
    id: idProp,
    featuredToday: featuredTodayModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    backgroundImage: "",
    people: "",
    title: "",
    photographerInfo: "",
  };
  const [backgroundImage, setBackgroundImage] = React.useState(
    initialValues.backgroundImage
  );
  const [people, setPeople] = React.useState(initialValues.people);
  const [title, setTitle] = React.useState(initialValues.title);
  const [photographerInfo, setPhotographerInfo] = React.useState(
    initialValues.photographerInfo
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = featuredTodayRecord
      ? { ...initialValues, ...featuredTodayRecord }
      : initialValues;
    setBackgroundImage(cleanValues.backgroundImage);
    setPeople(cleanValues.people);
    setTitle(cleanValues.title);
    setPhotographerInfo(cleanValues.photographerInfo);
    setErrors({});
  };
  const [featuredTodayRecord, setFeaturedTodayRecord] = React.useState(
    featuredTodayModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFeaturedToday.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFeaturedToday
        : featuredTodayModelProp;
      setFeaturedTodayRecord(record);
    };
    queryData();
  }, [idProp, featuredTodayModelProp]);
  React.useEffect(resetStateValues, [featuredTodayRecord]);
  const validations = {
    backgroundImage: [],
    people: [],
    title: [],
    photographerInfo: [],
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
          backgroundImage: backgroundImage ?? null,
          people: people ?? null,
          title: title ?? null,
          photographerInfo: photographerInfo ?? null,
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
            query: updateFeaturedToday.replaceAll("__typename", ""),
            variables: {
              input: {
                id: featuredTodayRecord.id,
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
      {...getOverrideProps(overrides, "FeaturedTodayUpdateForm")}
      {...rest}
    >
      <TextField
        label="Background image"
        isRequired={false}
        isReadOnly={false}
        value={backgroundImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              backgroundImage: value,
              people,
              title,
              photographerInfo,
            };
            const result = onChange(modelFields);
            value = result?.backgroundImage ?? value;
          }
          if (errors.backgroundImage?.hasError) {
            runValidationTasks("backgroundImage", value);
          }
          setBackgroundImage(value);
        }}
        onBlur={() => runValidationTasks("backgroundImage", backgroundImage)}
        errorMessage={errors.backgroundImage?.errorMessage}
        hasError={errors.backgroundImage?.hasError}
        {...getOverrideProps(overrides, "backgroundImage")}
      ></TextField>
      <TextField
        label="People"
        isRequired={false}
        isReadOnly={false}
        value={people}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              backgroundImage,
              people: value,
              title,
              photographerInfo,
            };
            const result = onChange(modelFields);
            value = result?.people ?? value;
          }
          if (errors.people?.hasError) {
            runValidationTasks("people", value);
          }
          setPeople(value);
        }}
        onBlur={() => runValidationTasks("people", people)}
        errorMessage={errors.people?.errorMessage}
        hasError={errors.people?.hasError}
        {...getOverrideProps(overrides, "people")}
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
              backgroundImage,
              people,
              title: value,
              photographerInfo,
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
        label="Photographer info"
        isRequired={false}
        isReadOnly={false}
        value={photographerInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              backgroundImage,
              people,
              title,
              photographerInfo: value,
            };
            const result = onChange(modelFields);
            value = result?.photographerInfo ?? value;
          }
          if (errors.photographerInfo?.hasError) {
            runValidationTasks("photographerInfo", value);
          }
          setPhotographerInfo(value);
        }}
        onBlur={() => runValidationTasks("photographerInfo", photographerInfo)}
        errorMessage={errors.photographerInfo?.errorMessage}
        hasError={errors.photographerInfo?.hasError}
        {...getOverrideProps(overrides, "photographerInfo")}
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
          isDisabled={!(idProp || featuredTodayModelProp)}
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
              !(idProp || featuredTodayModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
