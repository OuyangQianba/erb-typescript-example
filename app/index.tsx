import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import './app.global.css';
import { IPCProxy } from "./ipc/render"
const mainProxy = new IPCProxy()
setTimeout(mainProxy.active, 5000)

const store = configureStore.configureStore();
console.log('here')


render(
  <AppContainer>
    <Root store={store} history={configureStore.history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
