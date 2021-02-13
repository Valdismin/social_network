import {addMessageCreateAction} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AddMessageType} from "../../redux/store";
import {stateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state:stateType) => {
    return {
        dialogsPropsAll:state.dialogsPropsAll,
    }
}
let mapDispatchToProps = (dispatch:(action: AddMessageType ) => void)=> {
    return {
        addMessage:(newMessageText:string)=>{dispatch(addMessageCreateAction(newMessageText))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs) as React.ComponentType
