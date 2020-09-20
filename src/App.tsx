import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dilogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {postsType, stateAllType} from "./redux/state";


type PropsAppType = {
    state:stateAllType
    addPost:(NewMessage:string) => void
    UpdateNewPostChange: (newText: string) => void

}

export const App = (props: PropsAppType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={() => <Dialogs state={props.state.dialogsPropsAll}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state}
                                                              addPost={props.addPost}
                                                              newPostsText = {props.state.postsPropsAll.newPostsText}
                                                              UpdateNewPostChange ={props.UpdateNewPostChange}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    )
        ;
}

