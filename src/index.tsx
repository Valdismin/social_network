import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export const rerenderEntireApp = () => {ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App store = {store} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);}
rerenderEntireApp()
store.subscribe(() => {
    rerenderEntireApp()
})


