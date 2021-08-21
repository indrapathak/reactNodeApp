// IN THIS index.js in order to configure redux and store we have to import 
//1.provider to wrap the main app which make store available to the app.
//2. In prder to create store we have to import create store and provide that store to the provider in wrapping
// 3.  But as reducer is the only one who can update store, so we have to give the reducer name to store as a an argument ,otherwise it will give error.


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/todoReducer';
import { BrowserRouter } from 'react-router-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducer,composeWithDevTools());

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
