import { logging } from '../utils/logging';

export const isValid = (value: string | undefined): boolean => {
  const pattern = new RegExp('\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{7}$');
  if (value) {
    logging('TEST INPUT VALUE');
    return pattern.test(value);
  }
  return false;
};
