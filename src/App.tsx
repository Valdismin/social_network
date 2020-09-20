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
import {stateAllType} from "./redux/state";


type PropsAppType = {
    state:stateAllType
    addPost:() => void
    UpdateNewPostChange: (newText: string) => void
    addMessage:() => void
    UpdateNewMessageChange: (newMessText:string) => void
}

export const App = (props: PropsAppType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={() => <Dialogs state={props.state.dialogsPropsAll}
                                                                 newMessageText={props.state.dialogsPropsAll.newMessageText}
                                                                 addMessage = {props.addMessage}
                                                                 UpdateNewMessageChange = {props.UpdateNewMessageChange}/>}/>
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

