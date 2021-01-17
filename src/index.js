import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store";
import {Provider} from "react-redux";

// let renderEntireTree = () => { // рендерит страницу при добавлении данных
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

// renderEntireTree(store.getState());
//
// store.subscribe( () => {
//     renderEntireTree()
// });
//
