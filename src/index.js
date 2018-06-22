
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import reducer from './reducers'
import Messages from "./components/Messages";
import Likes from "./components/Likes";
<<<<<<< HEAD
import AddMessage from "./components/AddMessage";
=======
import { GET_MESSAGES } from './actions/messageActions';
import AddMessage from "./components/AddMessage";
>>>>>>> 8c78beb26c2e4a26e653604d3dd869d375f147ad

const store = createStore(reducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

<<<<<<< HEAD
ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route path="/messages" component={ Messages } />
                    <Route path="/likes" component={ Likes } />
                    <Route path="/addmessage" component={ AddMessage } />
                </Switch>
            </React.Fragment>
        </Provider>
    </BrowserRouter>
  , document.getElementById( "root" ),
);
registerServiceWorker();
=======
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
        <BrowserRouter>
            <Provider store={ store }>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={ App } />
                        <Route path="/messages" component={ Messages } />
                        <Route path="/likes" component={ Likes } />
                        <Route path="/addmessage" component={ AddMessage } />
                    </Switch>
                </React.Fragment>
            </Provider>
        </BrowserRouter>
      , document.getElementById( "root" ),
    );
    registerServiceWorker();
}
>>>>>>> 8c78beb26c2e4a26e653604d3dd869d375f147ad
