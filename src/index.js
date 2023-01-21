import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';

import App from './App';

Array.prototype.swap = function (x,y) {
  const b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

const rootElement = document.getElementById('root');
render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
);
