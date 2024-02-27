/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateAllMediaType = /* GraphQL */ `
  subscription OnCreateAllMediaType(
    $filter: ModelSubscriptionAllMediaTypeFilterInput
  ) {
    onCreateAllMediaType(filter: $filter) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAllMediaType = /* GraphQL */ `
  subscription OnUpdateAllMediaType(
    $filter: ModelSubscriptionAllMediaTypeFilterInput
  ) {
    onUpdateAllMediaType(filter: $filter) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAllMediaType = /* GraphQL */ `
  subscription OnDeleteAllMediaType(
    $filter: ModelSubscriptionAllMediaTypeFilterInput
  ) {
    onDeleteAllMediaType(filter: $filter) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTopNews = /* GraphQL */ `
  subscription OnCreateTopNews($filter: ModelSubscriptionTopNewsFilterInput) {
    onCreateTopNews(filter: $filter) {
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
export const onUpdateTopNews = /* GraphQL */ `
  subscription OnUpdateTopNews($filter: ModelSubscriptionTopNewsFilterInput) {
    onUpdateTopNews(filter: $filter) {
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
export const onDeleteTopNews = /* GraphQL */ `
  subscription OnDeleteTopNews($filter: ModelSubscriptionTopNewsFilterInput) {
    onDeleteTopNews(filter: $filter) {
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
