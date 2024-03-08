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
import { getBornToday } from "../graphql/queries";
import { updateBornToday } from "../graphql/mutations";
const client = generateClient();
export default function BornTodayUpdateForm(props) {
  const {
    id: idProp,
    bornToday: bornTodayModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    avatarImage: "",
    name: "",
    age: "",
  };
  const [avatarImage, setAvatarImage] = React.useState(
    initialValues.avatarImage
  );
  const [name, setName] = React.useState(initialValues.name);
  const [age, setAge] = React.useState(initialValues.age);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bornTodayRecord
      ? { ...initialValues, ...bornTodayRecord }
      : initialValues;
    setAvatarImage(cleanValues.avatarImage);
    setName(cleanValues.name);
    setAge(cleanValues.age);
    setErrors({});
  };
  const [bornTodayRecord, setBornTodayRecord] =
    React.useState(bornTodayModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBornToday.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBornToday
        : bornTodayModelProp;
      setBornTodayRecord(record);
    };
    queryData();
  }, [idProp, bornTodayModelProp]);
  React.useEffect(resetStateValues, [bornTodayRecord]);
  const validations = {
    avatarImage: [],
    name: [],
    age: [],
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
          avatarImage: avatarImage ?? null,
          name: name ?? null,
          age: age ?? null,
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
            query: updateBornToday.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bornTodayRecord.id,
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
      {...getOverrideProps(overrides, "BornTodayUpdateForm")}
      {...rest}
    >
      <TextField
        label="Avatar image"
        isRequired={false}
        isReadOnly={false}
        value={avatarImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatarImage: value,
              name,
              age,
            };
            const result = onChange(modelFields);
            value = result?.avatarImage ?? value;
          }
          if (errors.avatarImage?.hasError) {
            runValidationTasks("avatarImage", value);
          }
          setAvatarImage(value);
        }}
        onBlur={() => runValidationTasks("avatarImage", avatarImage)}
        errorMessage={errors.avatarImage?.errorMessage}
        hasError={errors.avatarImage?.hasError}
        {...getOverrideProps(overrides, "avatarImage")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatarImage,
              name: value,
              age,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        value={age}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatarImage,
              name,
              age: value,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
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
          isDisabled={!(idProp || bornTodayModelProp)}
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
              !(idProp || bornTodayModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
