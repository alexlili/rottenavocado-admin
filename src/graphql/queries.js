/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAllMediaType = /* GraphQL */ `
  query GetAllMediaType($id: ID!) {
    getAllMediaType(id: $id) {
      id
      typeArray
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAllMediaTypes = /* GraphQL */ `
  query ListAllMediaTypes(
    $filter: ModelAllMediaTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllMediaTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        typeArray
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTopNews = /* GraphQL */ `
  query GetTopNews($id: ID!) {
    getTopNews(id: $id) {
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
export const listTopNews = /* GraphQL */ `
  query ListTopNews(
    $filter: ModelTopNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        title
        detail
        publishInfo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
