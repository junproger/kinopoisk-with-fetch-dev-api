import { Conponent } from '../../../typing/Component';

import { Join } from '../Join/Join';
import { Loader } from '../Loader/Loader';
import { Movies } from '../Movies/Movies';

import * as styles from './main.module.css';

export const Main: Conponent = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  MAIN.append(Join());
  MAIN.append(Loader());
  const MOVIES = Movies();
  setTimeout(() => {
    MAIN.lastChild?.remove();
    MAIN.append(MOVIES);
  }, 4200);
  return MAIN;
};
