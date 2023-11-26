import { Conponent } from '../../../typing/Component';

import { Form } from '../../Control/Form/Form';

import * as styles from './join.module.css';

export const Join: Conponent = () => {
  const JOIN: HTMLElement = document.createElement('div');
  JOIN.className = <string>styles['join'];
  const H2: HTMLHeadingElement = document.createElement('h2');
  H2.className = <string>styles['welcome'];
  H2.textContent = 'WELCOME!';
  JOIN.append(H2);
  JOIN.append(Form());
  return JOIN;
};
