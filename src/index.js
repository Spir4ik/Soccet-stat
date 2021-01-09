import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducers from './reducer/index'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
)