import { Conponent } from '../../../typing/Component';
import { Item } from '../Item/Item';

import * as styles from './movies.module.css';

export const Movies: Conponent = () => {
  const MOVIES: HTMLElement = document.createElement('div');
  MOVIES.classList.add(<string>styles['movies'], <string>styles['grids']);
  const LIST = new Array(16).fill(0);
  LIST.map(() => MOVIES.append(Item()));
  return MOVIES;
};
