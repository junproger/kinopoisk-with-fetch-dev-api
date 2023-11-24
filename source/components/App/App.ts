import { ROOT } from '../../constants/root';

export const App = (): void => {
  const H1: HTMLHeadingElement = document.createElement('h1');
  H1.className = 'title';
  H1.textContent = 'OPEN MOVIE PORTAL';

  ROOT.append(H1);
};
