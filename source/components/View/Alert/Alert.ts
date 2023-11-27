import { Conponent } from '../../../typing/Component';

import * as styles from './alert.module.css';

export const Alert: Conponent = () => {
  const ALERT: HTMLElement = document.createElement('div');
  ALERT.className = <string>styles['alert'];
  ALERT.innerHTML = `<strong>SOMETHING WENT WRONG,
  <br>PLEASE RELOAD THIS PAGE</strong>`;
  return ALERT;
};
