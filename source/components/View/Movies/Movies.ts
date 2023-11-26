import { ConponentWithData } from '../../../typing/ComponentWithData';

import { DefaultRespType } from '../../../typing/DefaultRespType';

import { Item } from '../Item/Item';

import * as styles from './movies.module.css';

export const Movies: ConponentWithData = (data: DefaultRespType) => {
  const MOVIES: HTMLElement = document.createElement('div');
  MOVIES.classList.add(<string>styles['movies'], <string>styles['grids']);

  data.docs.map((item) => MOVIES.append(Item([item.name, item.poster.previewUrl])));
  return MOVIES;
};
