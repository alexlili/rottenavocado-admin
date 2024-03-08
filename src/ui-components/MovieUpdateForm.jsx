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
import { getMovie } from "../graphql/queries";
import { updateMovie } from "../graphql/mutations";
const client = generateClient();
export default function MovieUpdateForm(props) {
  const {
    id: idProp,
    movie: movieModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    director: "",
    actor: "",
    name: "",
    year: "",
    imageList: "",
    introduction: "",
  };
  const [director, setDirector] = React.useState(initialValues.director);
  const [actor, setActor] = React.useState(initialValues.actor);
  const [name, setName] = React.useState(initialValues.name);
  const [year, setYear] = React.useState(initialValues.year);
  const [imageList, setImageList] = React.useState(initialValues.imageList);
  const [introduction, setIntroduction] = React.useState(
    initialValues.introduction
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = movieRecord
      ? { ...initialValues, ...movieRecord }
      : initialValues;
    setDirector(cleanValues.director);
    setActor(cleanValues.actor);
    setName(cleanValues.name);
    setYear(cleanValues.year);
    setImageList(cleanValues.imageList);
    setIntroduction(cleanValues.introduction);
    setErrors({});
  };
  const [movieRecord, setMovieRecord] = React.useState(movieModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMovie.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMovie
        : movieModelProp;
      setMovieRecord(record);
    };
    queryData();
  }, [idProp, movieModelProp]);
  React.useEffect(resetStateValues, [movieRecord]);
  const validations = {
    director: [],
    actor: [],
    name: [],
    year: [],
    imageList: [],
    introduction: [],
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
          director: director ?? null,
          actor: actor ?? null,
          name: name ?? null,
          year: year ?? null,
          imageList: imageList ?? null,
          introduction: introduction ?? null,
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
            query: updateMovie.replaceAll("__typename", ""),
            variables: {
              input: {
                id: movieRecord.id,
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
      {...getOverrideProps(overrides, "MovieUpdateForm")}
      {...rest}
    >
      <TextField
        label="Director"
        isRequired={false}
        isReadOnly={false}
        value={director}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              director: value,
              actor,
              name,
              year,
              imageList,
              introduction,
            };
            const result = onChange(modelFields);
            value = result?.director ?? value;
          }
          if (errors.director?.hasError) {
            runValidationTasks("director", value);
          }
          setDirector(value);
        }}
        onBlur={() => runValidationTasks("director", director)}
        errorMessage={errors.director?.errorMessage}
        hasError={errors.director?.hasError}
        {...getOverrideProps(overrides, "director")}
      ></TextField>
      <TextField
        label="Actor"
        isRequired={false}
        isReadOnly={false}
        value={actor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              director,
              actor: value,
              name,
              year,
              imageList,
              introduction,
            };
            const result = onChange(modelFields);
            value = result?.actor ?? value;
          }
          if (errors.actor?.hasError) {
            runValidationTasks("actor", value);
          }
          setActor(value);
        }}
        onBlur={() => runValidationTasks("actor", actor)}
        errorMessage={errors.actor?.errorMessage}
        hasError={errors.actor?.hasError}
        {...getOverrideProps(overrides, "actor")}
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
              director,
              actor,
              name: value,
              year,
              imageList,
              introduction,
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
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              director,
              actor,
              name,
              year: value,
              imageList,
              introduction,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Image list"
        isRequired={false}
        isReadOnly={false}
        value={imageList}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              director,
              actor,
              name,
              year,
              imageList: value,
              introduction,
            };
            const result = onChange(modelFields);
            value = result?.imageList ?? value;
          }
          if (errors.imageList?.hasError) {
            runValidationTasks("imageList", value);
          }
          setImageList(value);
        }}
        onBlur={() => runValidationTasks("imageList", imageList)}
        errorMessage={errors.imageList?.errorMessage}
        hasError={errors.imageList?.hasError}
        {...getOverrideProps(overrides, "imageList")}
      ></TextField>
      <TextField
        label="Introduction"
        isRequired={false}
        isReadOnly={false}
        value={introduction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              director,
              actor,
              name,
              year,
              imageList,
              introduction: value,
            };
            const result = onChange(modelFields);
            value = result?.introduction ?? value;
          }
          if (errors.introduction?.hasError) {
            runValidationTasks("introduction", value);
          }
          setIntroduction(value);
        }}
        onBlur={() => runValidationTasks("introduction", introduction)}
        errorMessage={errors.introduction?.errorMessage}
        hasError={errors.introduction?.hasError}
        {...getOverrideProps(overrides, "introduction")}
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
          isDisabled={!(idProp || movieModelProp)}
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
              !(idProp || movieModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
