import { Conponent } from '../../../typing/Component';

import { isValid } from '../../../helpers/isValid';

import * as styles from './form.module.css';

export const Form: Conponent = () => {
  const FORM: HTMLFormElement = document.createElement('form');
  FORM.setAttribute('name', 'joinform');
  FORM.setAttribute('aria-label', 'join form');
  FORM.className = <string>styles['form'];
  FORM.onsubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    const CLASS = `.${<string>styles['phone']}`;
    const INPUT: HTMLInputElement | null = FORM.querySelector(CLASS);
    if (isValid(INPUT?.value)) {
      alert('Success!');
      // FORM.submit();
    }
  };
  const NAME = Object.assign(document.createElement('input'), {
    type: 'text',
    name: 'name',
    autocomplete: 'off',
    autofocus: true,
    className: `${<string>styles['name']}`,
    placeholder: 'YOUR NAME',
    ariaLabel: 'Input Name',
    maxlength: '20',
    minlength: '2',
    required: true,
  });
  FORM.append(NAME);
  const TEL = Object.assign(document.createElement('input'), {
    type: 'tel',
    name: 'phone',
    autocomplete: 'off',
    pattern: '^\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{7}$',
    className: `${<string>styles['phone']}`,
    placeholder: '+7(123)4567890',
    ariaLabel: 'Input Phone',
    maxlength: '20',
    minlength: '12',
    required: true,
  });
  TEL.oninput = (): void =>
    TEL.validity.patternMismatch ? TEL.setCustomValidity('INPUT FORMAT +7(123)4567890') : TEL.setCustomValidity('');
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
