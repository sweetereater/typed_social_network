import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import reduxStore from './redux/redux-store';
import { StateType } from './redux/stateTypes';

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={reduxStore.getState()}
        dispatch={reduxStore.dispatch}
      // dispatch={store.dispatch.bind(this)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(reduxStore.getState());

reduxStore.subscribe(() => {
  let state = reduxStore.getState();
  rerenderEntireTree(state);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
