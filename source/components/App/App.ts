import { ROOT } from '../../constants/root';

import { Header } from '../View/Header/Header';
import { Main } from '../View/Main/Main';

export const App = (): void => {
  ROOT.append(Header());
  ROOT.append(Main());
};
