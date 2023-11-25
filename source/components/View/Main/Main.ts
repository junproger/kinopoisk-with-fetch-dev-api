import { Conponent } from '../../../typing/Component';

import { Loader } from '../Loader/Loader';
import { Movies } from '../Movies/Movies';

import * as styles from './main.module.css';

export const Main: Conponent = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  const CHILD = `
    <div>
        <h2>Welcome to Open Movies Portal!</h2>
    </div>
  `;
  MAIN.innerHTML = CHILD;
  MAIN.append(Loader());
  setTimeout(() => {
    MAIN.lastChild?.remove();
    MAIN.append(Movies());
  }, 4000);
  return MAIN;
};
