import { App } from './components/App/App';

import { logging } from './utils/logging';

window.addEventListener('DOMContentLoaded', function (): void {
  logging('OPEN MOVIE PORTAL');
  return App();
});
