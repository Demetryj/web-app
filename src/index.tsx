import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';
HashRouter;
import { store } from './redux/store';
import { App } from './components/App';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={null}></Suspense>
      <App />
    </HashRouter>
  </Provider>
);
