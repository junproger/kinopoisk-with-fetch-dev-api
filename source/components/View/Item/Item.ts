import { Conponent } from '../../../typing/Component';

import * as styles from './item.module.css';

export const Item: Conponent = () => {
  const ITEM: HTMLElement = document.createElement('div');
  ITEM.className = <string>styles['item'];
  ITEM.textContent = 'MOVIE ITEM';
  return ITEM;
};
