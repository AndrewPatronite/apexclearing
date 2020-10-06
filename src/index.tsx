import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const INITIAL_STATE = { name: 'Andy' };

const stateReducer = (state = INITIAL_STATE, action: any) => {
  const { type, value } = action;

  switch (type) {
    case 'nameChange':
      return { ...state, name: value };
    default:
      return state;
  }
};

const store = createStore(stateReducer);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
