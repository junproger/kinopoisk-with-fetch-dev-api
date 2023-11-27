import { DefaultRespType } from '../../typing/DefaultRespType';

import { logging } from '../../utils/logging';

export const FetchData = (callback: (data: DefaultRespType) => void): Promise<DefaultRespType> => {
  const REQUEST = 'https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=32&page=1';
  const FETCHING = fetch(REQUEST, {
    method: 'GET',
    headers: { 'X-API-KEY': 'P3RTS9G-2YH4XAV-QWKVWAZ-E9XFFDQ', Accept: 'application/json' },
  })
    .then((resp) => resp.json())
    .then((data: DefaultRespType) => {
      callback(data);
      logging(data);
      return data;
    })
    .catch((error) => {
      logging(error);
      throw error;
    });
  return FETCHING;
};
