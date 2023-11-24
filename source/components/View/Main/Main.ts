import { MainType } from '../../../typing/MainType';

import * as styles from './main.module.css';

export const Main: MainType = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  MAIN.textContent = 'MAIN MODULE';
  return MAIN;
};
