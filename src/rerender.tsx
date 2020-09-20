import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, stateAllType, UpdateNewMessageChange, UpdateNewPostChange} from "./redux/state";



export const rerenderEntireApp = (state:stateAllType) => {ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state = {state} addPost={addPost} UpdateNewPostChange = {UpdateNewPostChange} addMessage ={addMessage} UpdateNewMessageChange={UpdateNewMessageChange} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);}