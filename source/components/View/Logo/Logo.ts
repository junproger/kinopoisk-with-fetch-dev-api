import { Conponent } from '../../../typing/Component';

import imagelogo from '../../../assets/0M.png';

import * as styles from './logo.module.css';

export const Logo: Conponent = () => {
  const LOGO: HTMLElement = document.createElement('div');
  LOGO.className = <string>styles['logo'];
  const OMG = Object.assign(document.createElement('img'), {
    className: <string>styles['omimg'],
    src: imagelogo,
    title: '0M',
    alt: '0M',
  });
  LOGO.append(OMG);
  return LOGO;
};
