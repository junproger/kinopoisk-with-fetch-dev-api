import { Conponent } from '../../../typing/Component';

import * as styles from './main.module.css';

import { DefaultRespType } from '../../../typing/DefaultRespType';

import { FetchData } from '../../Model/FetchData';

import { Join } from '../Join/Join';
import { Loader } from '../Loader/Loader';
import { Movies } from '../Movies/Movies';
import { Alert } from '../Alert/Alert';

export const Main: Conponent = () => {
  const MAIN: HTMLElement = document.createElement('main');
  MAIN.className = <string>styles['main'];
  MAIN.append(Join());
  MAIN.append(Loader());
  const callback = (data: DefaultRespType): void => {
    if (data.docs) {
      const MOVIES = Movies(data);
      MAIN.lastChild?.remove();
      MAIN.append(MOVIES);
    }
  };
  FetchData(callback).catch(() => {
    const ALERT = Alert();
    MAIN.lastChild?.remove();
    MAIN.append(ALERT);
  });
  return MAIN;
};
