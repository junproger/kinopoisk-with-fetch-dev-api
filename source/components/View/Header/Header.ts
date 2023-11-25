import { Conponent } from '../../../typing/Component';

import * as styles from './header.module.css';

export const Header: Conponent = () => {
  const HEADER: HTMLElement = document.createElement('header');
  HEADER.className = <string>styles['header'];
  const H1: HTMLHeadingElement = document.createElement('h1');
  H1.className = <string>styles['title'];
  H1.textContent = 'OPEN MOVIE PORTAL';
  HEADER.append(H1);
  return HEADER;
};
