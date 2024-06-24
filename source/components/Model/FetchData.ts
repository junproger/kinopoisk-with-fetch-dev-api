import { DefaultRespType } from '../../typing/DefaultRespType';

import { logging } from '../../utils/logging';

export const FetchData = (callback: (data: DefaultRespType) => void): Promise<DefaultRespType> => {
  const REQUEST = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=32&notNullFields=poster.url&rating.imdb=8-10';
  const FETCHING = fetch(REQUEST, {
    method: 'GET',
    headers: { 'X-API-KEY': 'P3RTS9G-2YH4XAV-QWKVWAZ-E9XFFDQ', Accept: 'application/json' },
  })
    .then((resp) => {
      // logging(resp);
      return resp.json();
    })
    .then((data: DefaultRespType) => {
      // logging(data);
      callback(data);
      return data;
    })
    .catch((error) => {
      logging(error);
      throw error;
    });
  return FETCHING;
};
