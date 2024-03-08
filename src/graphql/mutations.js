/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBornToday = /* GraphQL */ `
  mutation CreateBornToday(
    $input: CreateBornTodayInput!
    $condition: ModelBornTodayConditionInput
  ) {
    createBornToday(input: $input, condition: $condition) {
      id
      avatarImage
      name
      age
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBornToday = /* GraphQL */ `
  mutation UpdateBornToday(
    $input: UpdateBornTodayInput!
    $condition: ModelBornTodayConditionInput
  ) {
    updateBornToday(input: $input, condition: $condition) {
      id
      avatarImage
      name
      age
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBornToday = /* GraphQL */ `
  mutation DeleteBornToday(
    $input: DeleteBornTodayInput!
    $condition: ModelBornTodayConditionInput
  ) {
    deleteBornToday(input: $input, condition: $condition) {
      id
      avatarImage
      name
      age
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFeaturedToday = /* GraphQL */ `
  mutation CreateFeaturedToday(
    $input: CreateFeaturedTodayInput!
    $condition: ModelFeaturedTodayConditionInput
  ) {
    createFeaturedToday(input: $input, condition: $condition) {
      id
      backgroundImage
      people
      title
      photographerInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFeaturedToday = /* GraphQL */ `
  mutation UpdateFeaturedToday(
    $input: UpdateFeaturedTodayInput!
    $condition: ModelFeaturedTodayConditionInput
  ) {
    updateFeaturedToday(input: $input, condition: $condition) {
      id
      backgroundImage
      people
      title
      photographerInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFeaturedToday = /* GraphQL */ `
  mutation DeleteFeaturedToday(
    $input: DeleteFeaturedTodayInput!
    $condition: ModelFeaturedTodayConditionInput
  ) {
    deleteFeaturedToday(input: $input, condition: $condition) {
      id
      backgroundImage
      people
      title
      photographerInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUpNextMedia = /* GraphQL */ `
  mutation CreateUpNextMedia(
    $input: CreateUpNextMediaInput!
    $condition: ModelUpNextMediaConditionInput
  ) {
    createUpNextMedia(input: $input, condition: $condition) {
      id
      coverImage
      profileImage
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUpNextMedia = /* GraphQL */ `
  mutation UpdateUpNextMedia(
    $input: UpdateUpNextMediaInput!
    $condition: ModelUpNextMediaConditionInput
  ) {
    updateUpNextMedia(input: $input, condition: $condition) {
      id
      coverImage
      profileImage
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUpNextMedia = /* GraphQL */ `
  mutation DeleteUpNextMedia(
    $input: DeleteUpNextMediaInput!
    $condition: ModelUpNextMediaConditionInput
  ) {
    deleteUpNextMedia(input: $input, condition: $condition) {
      id
      coverImage
      profileImage
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMovieNews = /* GraphQL */ `
  mutation CreateMovieNews(
    $input: CreateMovieNewsInput!
    $condition: ModelMovieNewsConditionInput
  ) {
    createMovieNews(input: $input, condition: $condition) {
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
export const updateMovieNews = /* GraphQL */ `
  mutation UpdateMovieNews(
    $input: UpdateMovieNewsInput!
    $condition: ModelMovieNewsConditionInput
  ) {
    updateMovieNews(input: $input, condition: $condition) {
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
export const deleteMovieNews = /* GraphQL */ `
  mutation DeleteMovieNews(
    $input: DeleteMovieNewsInput!
    $condition: ModelMovieNewsConditionInput
  ) {
    deleteMovieNews(input: $input, condition: $condition) {
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
export const createTVNews = /* GraphQL */ `
  mutation CreateTVNews(
    $input: CreateTVNewsInput!
    $condition: ModelTVNewsConditionInput
  ) {
    createTVNews(input: $input, condition: $condition) {
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
export const updateTVNews = /* GraphQL */ `
  mutation UpdateTVNews(
    $input: UpdateTVNewsInput!
    $condition: ModelTVNewsConditionInput
  ) {
    updateTVNews(input: $input, condition: $condition) {
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
export const deleteTVNews = /* GraphQL */ `
  mutation DeleteTVNews(
    $input: DeleteTVNewsInput!
    $condition: ModelTVNewsConditionInput
  ) {
    deleteTVNews(input: $input, condition: $condition) {
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
