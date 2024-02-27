/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAllMediaType = /* GraphQL */ `
  mutation CreateAllMediaType(
    $input: CreateAllMediaTypeInput!
    $condition: ModelAllMediaTypeConditionInput
  ) {
    createAllMediaType(input: $input, condition: $condition) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAllMediaType = /* GraphQL */ `
  mutation UpdateAllMediaType(
    $input: UpdateAllMediaTypeInput!
    $condition: ModelAllMediaTypeConditionInput
  ) {
    updateAllMediaType(input: $input, condition: $condition) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAllMediaType = /* GraphQL */ `
  mutation DeleteAllMediaType(
    $input: DeleteAllMediaTypeInput!
    $condition: ModelAllMediaTypeConditionInput
  ) {
    deleteAllMediaType(input: $input, condition: $condition) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTopNews = /* GraphQL */ `
  mutation CreateTopNews(
    $input: CreateTopNewsInput!
    $condition: ModelTopNewsConditionInput
  ) {
    createTopNews(input: $input, condition: $condition) {
      id
      image
      title
      detail
      publishInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTopNews = /* GraphQL */ `
  mutation UpdateTopNews(
    $input: UpdateTopNewsInput!
    $condition: ModelTopNewsConditionInput
  ) {
    updateTopNews(input: $input, condition: $condition) {
      id
      image
      title
      detail
      publishInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTopNews = /* GraphQL */ `
  mutation DeleteTopNews(
    $input: DeleteTopNewsInput!
    $condition: ModelTopNewsConditionInput
  ) {
    deleteTopNews(input: $input, condition: $condition) {
      id
      image
      title
      detail
      publishInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
