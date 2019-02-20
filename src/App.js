/* eslint react/no-did-mount-set-state: 0 */
import React, { } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './App.css';

import rootReducer from './rootReducer';

import Toggle from './Toggle';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
        <Toggle />
  </Provider>
);

export default App;
