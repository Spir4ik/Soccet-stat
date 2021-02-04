import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducers from "./reducer"

const store = createStore(reducers);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root")
)