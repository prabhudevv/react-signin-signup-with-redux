import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore  , applyMiddleware} from 'redux';

import * as serviceWorker from './serviceWorker';
import  rootReducer from './store/reducers';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';


import './index.css';
import App from './App';


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <PersistGate  persistor ={persistor}>
          <App />
      </PersistGate>
     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// console.log('index',store.getState())
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
