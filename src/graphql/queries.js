/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovieRating = /* GraphQL */ `
  query GetMovieRating($id: ID!) {
    getMovieRating(id: $id) {
      id
      movieId
      userId
      rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMovieRatings = /* GraphQL */ `
  query ListMovieRatings(
    $filter: ModelMovieRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieId
        userId
        rate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      director
      actor
      name
      year
      imageList
      introduction
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        director
        actor
        name
        year
        imageList
        introduction
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBornToday = /* GraphQL */ `
  query GetBornToday($id: ID!) {
    getBornToday(id: $id) {
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
export const listBornTodays = /* GraphQL */ `
  query ListBornTodays(
    $filter: ModelBornTodayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBornTodays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        avatarImage
        name
        age
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFeaturedToday = /* GraphQL */ `
  query GetFeaturedToday($id: ID!) {
    getFeaturedToday(id: $id) {
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
export const listFeaturedTodays = /* GraphQL */ `
  query ListFeaturedTodays(
    $filter: ModelFeaturedTodayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeaturedTodays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        backgroundImage
        people
        title
        photographerInfo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUpNextMedia = /* GraphQL */ `
  query GetUpNextMedia($id: ID!) {
    getUpNextMedia(id: $id) {
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
export const listUpNextMedias = /* GraphQL */ `
  query ListUpNextMedias(
    $filter: ModelUpNextMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpNextMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coverImage
        profileImage
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMovieNews = /* GraphQL */ `
  query GetMovieNews($id: ID!) {
    getMovieNews(id: $id) {
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
export const listMovieNews = /* GraphQL */ `
  query ListMovieNews(
    $filter: ModelMovieNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getTVNews = /* GraphQL */ `
  query GetTVNews($id: ID!) {
    getTVNews(id: $id) {
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
export const listTVNews = /* GraphQL */ `
  query ListTVNews(
    $filter: ModelTVNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTVNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
