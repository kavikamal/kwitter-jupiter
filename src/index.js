
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import reducer from './reducers'

import { GET_MESSAGES } from './actions/messageActions';


const store = createStore(reducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

fetch('https://kwitter-api.herokuapp.com/messages')
.then(response => response.json())
.then(data => {
  store.dispatch({
    type: GET_MESSAGES,
    messages: data
  })
  renderSom();
})

function renderSom() {
    ReactDOM.render(
      <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/kwitter-jupiter" : "/"}>
            <Provider store={ store }>
                <App/>
            </Provider>
        </BrowserRouter>
      , document.getElementById( "root" ),
    );
    registerServiceWorker();
}
