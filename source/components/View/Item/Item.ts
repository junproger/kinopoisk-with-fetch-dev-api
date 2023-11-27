import { ConponentWithProp } from '../../../typing/ComponentWithProp';

import * as styles from './item.module.css';

export const Item: ConponentWithProp = (prop) => {
  const [name, prev] = prop;
  const ITEM: HTMLElement = document.createElement('section');
  ITEM.className = <string>styles['item'];
  const IMG = Object.assign(document.createElement('img'), {
    className: <string>styles['poster'],
    src: <string>prev,
    title: `${name}`,
    alt: `${name}`,
  });
  ITEM.append(IMG);
  const H3: HTMLHeadingElement = document.createElement('h3');
  H3.className = <string>styles['title'];
  H3.textContent = `${name}`;
  ITEM.append(H3);
  return ITEM;
};
