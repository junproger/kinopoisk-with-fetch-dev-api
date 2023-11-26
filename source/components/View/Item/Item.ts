import { Conponent } from '../../../typing/Component';

import poster from '../../../assets/barbenheimer.webp';

import * as styles from './item.module.css';

export const Item: Conponent = () => {
  const ITEM: HTMLElement = document.createElement('section');
  ITEM.className = <string>styles['item'];
  const IMG: HTMLImageElement = document.createElement('img');
  IMG.className = <string>styles['poster'];
  IMG.alt = 'poster';
  IMG.src = poster;
  ITEM.append(IMG);
  const H3: HTMLHeadingElement = document.createElement('h3');
  H3.className = <string>styles['title'];
  H3.textContent = 'MOVIE TITLE';
  ITEM.append(H3);
  return ITEM;
};
