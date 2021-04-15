import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stateType} from "../redux/redux-store";
import {LinearProgress} from "@material-ui/core";


export function withSuspense<WCP>(Component: React.ComponentType<WCP>) {
    return (props:WCP) => {
        return (
            <React.Suspense fallback={<LinearProgress />}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}
