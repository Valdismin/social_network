import React, {ChangeEvent, useState} from "react";
import {ProfileType} from "../../../redux/porfile_reducer";



type profileStatusType = {
    status: string,
    updateStatus : (status:string) => void
}
type stateType = {
    editMode:boolean,
    status:string
}


export class ProfileStatus extends React.Component <profileStatusType,stateType> {

    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode = () => {
             this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: profileStatusType, prevState: stateType) {
        if(prevState.status !== this.props.status ) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        debugger
        return (<div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}





