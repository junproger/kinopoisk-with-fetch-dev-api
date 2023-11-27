export const MovieApiMap = {
  APIURL: 'https://api.kinopoisk.dev/',
  APIVERS: 'v1.4',
  APIPATH: 'movie',
  METHOD: 'GET',
  HEADERS: { 'X-API-KEY': 'P3RTS9G-2YH4XAV-QWKVWAZ-E9XFFDQ', Accept: 'application/json' },
  REQUEST: 'https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=32&page=1',
  QUERIES: {
    page: 'page=1',
    limit: 'limit=32',
    kprank: 'rating.kp=8-10',
    imdbrank: 'rating.imdb=8-10',
    fields: {
      default: [
        'id',
        'name',
        'alternativeName',
        'enName',
        'type',
        'year',
        'description',
        'shortDescription',
        'movieLength',
        'isSeries',
        'ticketsOnSale',
        'totalSeriesLength',
        'seriesLength',
        'ratingMpaa',
        'ageRating',
        'top10',
        'top250',
        'typeNumber',
        'status',
        'names',
        'logo',
        'poster',
        'backdrop',
        'rating',
        'votes',
        'genres',
        'countries',
        'releaseYears',
      ],
      custom: [
        'id',
        'name',
        'alternativeName',
        'type',
        'year',
        'shortDescription',
        'movieLength',
        'logo',
        'poster',
        'rating',
      ],
    },
  },
};
