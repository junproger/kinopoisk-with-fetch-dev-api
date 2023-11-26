export type CustomRespType = {
  docs: {
    status: null | string;
    rating: {
      kp: number;
      imdb: number;
      filmCritics: number;
      russianFilmCritics: number;
      await: null | number;
    };
    votes: {
      kp: number;
      imdb: number;
      filmCritics: number;
      russianFilmCritics: number;
      await: null | number;
    };
    backdrop: {
      url: string;
      previewUrl: string;
    };
    movieLength: number;
    id: number;
    type: string;
    name: string;
    description: string;
    year: number;
    poster: {
      url: string;
      previewUrl: string;
    };
    genres: {
      name: string;
    }[];
    countries: {
      name: string;
    }[];
    typeNumber: number;
    alternativeName: string;
    enName: null | string;
    names: (
      | {
          name: string;
        }
      | {
          name: string;
          language: string;
          type: null;
        }
      | {
          name: string;
          language: string;
          type: string;
        }
    )[];
    ratingMpaa: string;
    shortDescription: string;
    ticketsOnSale: boolean;
    ageRating: number;
    logo: {
      url: string;
    };
    top10: null | number;
    top250: null | number;
    isSeries: boolean;
    seriesLength: null | number;
    totalSeriesLength: null | number;
  }[];
};
