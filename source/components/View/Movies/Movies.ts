import { Conponent } from '../../../typing/Component';

import * as styles from './movies.module.css';

export const Movies: Conponent = () => {
  const MOVIES: HTMLElement = document.createElement('div');
  MOVIES.classList.add(<string>styles['movies'], <string>styles['grids']);
  MOVIES.textContent = 'MOVIES MODULE';
  return MOVIES;
};
