import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {
    AddMessageType,
    AddPostType, stateAllType,
    updateNewMessageType, updateNewPostType,
} from "./redux/store";
import {DialogsContainer} from "./components/Dilogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


export type storeReduxAllType = {
    getState: () => stateAllType
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => void
}



export const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => News}/>
                <Route path='/music' render={() => Music}/>
                <Route path='/settings' render={() => Settings}/>
                <Route path='/users' render={()=> <UsersContainer/>}/>
            </div>
        </div>

    )
        ;
}

