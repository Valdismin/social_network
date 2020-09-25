import React from 'react';
import './index.css';
import {
    addMessage,
    addPost,
    state,
    stateAllType,
    subscribe,
    UpdateNewMessageChange,
    UpdateNewPostChange
} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export const rerenderEntireApp = (state:stateAllType) => {ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state = {state} addPost={addPost} UpdateNewPostChange = {UpdateNewPostChange} addMessage ={addMessage} UpdateNewMessageChange={UpdateNewMessageChange} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);}
rerenderEntireApp(state)
subscribe(rerenderEntireApp)


