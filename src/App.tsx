import React from 'react';
import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dilogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {stateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/preloader";

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>


        )
    }
}

const MapStateToProps = (state: stateType): MapStateType => {
    return {
        initialized: state.app.initialized
    }
}

type MapStateType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type PropsType = MapStateType & MapDispatchPropsType

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchPropsType, {}, stateType>(MapStateToProps, {initializeApp}))(App);