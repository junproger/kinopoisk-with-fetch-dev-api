import { Conponent } from '../../../typing/Component';

import * as styles from './header.module.css';

export const Header: Conponent = () => {
  const HEADER: HTMLElement = document.createElement('header');
  HEADER.className = <string>styles['header'];
  const H1: HTMLHeadingElement = document.createElement('h1');
  H1.className = <string>styles['title'];
  const SPAN1: HTMLSpanElement = document.createElement('span');
  SPAN1.textContent = 'OPEN';
  const SPAN2: HTMLSpanElement = document.createElement('span');
  SPAN2.textContent = 'MOVIES';
  const SPAN3: HTMLSpanElement = document.createElement('span');
  SPAN3.textContent = 'PORTAL';
  H1.append(SPAN1, SPAN2, SPAN3);
  HEADER.append(H1);
  return HEADER;
};
