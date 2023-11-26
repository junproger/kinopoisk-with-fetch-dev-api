export type MovieApiType = {
  APIURL: string;
  APIVERS: string;
  APIPATH: string;
  QUERIES: {
    page: string;
    limit: string;
    kprank: string;
    imdbrank: string;
    fields: {
      default: string[];
      custom: string[];
    };
  };
};
