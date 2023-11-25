import { Conponent } from '../../../typing/Component';

import { Movies } from '../Movies/Movies';

import * as styles from './main.module.css';

export const Main: Conponent = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  const CHILD = `
    <div>
        <h2>Welcome to Open Movie!</h2>
    </div>
  `;
  MAIN.innerHTML = CHILD;
  MAIN.append(Movies());
  return MAIN;
};
