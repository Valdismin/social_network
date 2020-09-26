import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dilogs/Dialogs";
import {Route} from 'react-router-dom'
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {
    AddMessageType,
    AddPostType,
    storeAllType, updateNewMessageType, updateNewPostType,
} from "./redux/state";


type PropsAppType = {
    store:storeAllType
}

export const App:React.FC<PropsAppType> = (props) => {
    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={() => <Dialogs state={state.dialogsPropsAll}
                                                                 newMessageText={state.dialogsPropsAll.newMessageText}
                                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path='/profile' render={() => <Profile state={state}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                                                              newPostsText = {state.postsPropsAll.newPostsText}
                                                              />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    )
        ;
}

