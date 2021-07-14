import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { addPost, onPostTextChange, subscribe, changeActiveDialog } from './redux/state';
import store from './redux/state';
import { StateType } from './redux/stateTypes';

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        onPostTextChange={store.onPostTextChange.bind(store)}
        changeActiveDialog={store.changeActiveDialog.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
