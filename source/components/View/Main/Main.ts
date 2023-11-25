import { MainType } from '../../../typing/MainType';

import * as styles from './main.module.css';

export const Main: MainType = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  const CHILD = `
    <div>
        <h2>Welcome to Open Movie!</h2>
    </div>
  `;
  MAIN.innerHTML = CHILD;
  return MAIN;
};
