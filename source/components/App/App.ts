import { ROOT } from '../../constants/root';

import { Header } from '../View/Header/Header';

export const App = (): void => {
  ROOT.append(Header());
};
