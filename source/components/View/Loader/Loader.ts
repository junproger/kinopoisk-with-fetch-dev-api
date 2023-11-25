import { Conponent } from '../../../typing/Component';

import * as styles from './loader.module.css';

export const Loader: Conponent = () => {
  const LOADER: HTMLElement = document.createElement('div');
  LOADER.className = <string>styles['loader'];
  return LOADER;
};
