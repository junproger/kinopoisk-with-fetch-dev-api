import { Conponent } from '../../../typing/Component';

import * as styles from './form.module.css';

export const Form: Conponent = () => {
  const FORM: HTMLFormElement = document.createElement('form');
  FORM.setAttribute('name', 'joinform');
  FORM.setAttribute('aria-label', 'join form');
  FORM.className = <string>styles['form'];
  const NAME = Object.assign(document.createElement('input'), {
    type: 'text',
    name: 'name',
    autocomplete: 'off',
    className: `${<string>styles['name']}`,
    placeholder: 'YOUR NAME',
    ariaLabel: 'Input Name',
  });
  FORM.append(NAME);
  const TEL = Object.assign(document.createElement('input'), {
    type: 'tel',
    name: 'phone',
    autocomplete: 'off',
    className: `${<string>styles['phone']}`,
    placeholder: '+7 (123) 456-78-90',
    ariaLabel: 'Input Phone',
  });
  FORM.append(TEL);
  const BTN = Object.assign(document.createElement('input'), {
    type: 'submit',
    name: 'button',
    className: `${<string>styles['button']}`,
    ariaLabel: 'Submit',
    value: 'JOIN',
  });
  FORM.append(BTN);
  return FORM;
};
