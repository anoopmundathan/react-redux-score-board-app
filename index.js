import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';

// Create store
const store = createStore(
  PlayerReducer
);

import ScoreBoard from './src/containers/ScoreBoard';

ReactDOM.render(
  <Provider store={ store }>
    <ScoreBoard />
  </Provider>,
  document.getElementById('root')
);

