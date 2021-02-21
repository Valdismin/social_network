import React, {useEffect} from 'react';
import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dilogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {stateType} from "./redux/redux-store";
import {compose, Store} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type AppPropsType = {
    store: Store
}

export function App(props: AppPropsType & MapStateToPropsType & MapDispatchToPropsType) {
    useEffect(()=>{
        props.initializeApp()
    },[props.initialized])

    if (!props.initialized) {
        <Preloader/>
    }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => News}/>
                    <Route path='/music' render={() => Music}/>
                    <Route path='/settings' render={() => Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        )}


let mapStateToProps = (state: stateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, AppPropsType, stateType>(mapStateToProps, {initializeApp})(App)
