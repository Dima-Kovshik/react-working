import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase, { auth, ContextGlobal } from './comp/firebase';
import { auth1 } from './comp/firebase';
import { test } from './comp/signIn'

ReactDOM.render(

  <ContextGlobal.Provider
    value={{
      firebase,
      auth1,
      test
    }}>
    <App />
  </ContextGlobal.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
