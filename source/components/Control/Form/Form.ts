import { Conponent } from '../../../typing/Component';

import * as styles from './form.module.css';

export const Form: Conponent = () => {
  const FORM: HTMLFormElement = document.createElement('form');
  FORM.className = <string>styles['form'];
  const NAME = Object.assign(document.createElement('input'), {
    type: 'text',
    className: `${<string>styles['name']}`,
    placeholder: 'YOUR NAME',
  });
  FORM.append(NAME);
  const TEL = Object.assign(document.createElement('input'), {
    type: 'tel',
    className: `${<string>styles['phone']}`,
    placeholder: '+7 (123) 456-78-90',
  });
  FORM.append(TEL);
  const BTN = Object.assign(document.createElement('input'), {
    type: 'submit',
    className: `${<string>styles['button']}`,
    value: 'JOIN',
  });
  FORM.append(BTN);
  return FORM;
};
