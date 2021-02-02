import {addMessageCreateAction, updateNewMassageCreateAction} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AddMessageType, AddPostType, stateAllType, updateNewMessageType, updateNewPostType} from "../../redux/store";
import {stateType} from "../../redux/redux-store";


let mapStateToProps = (state:stateType) => {
    return {
        dialogsPropsAll:state.dialogsPropsAll,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:(action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => void)=> {
    return {
        onMessageChange:(body:string)=>{dispatch(updateNewMassageCreateAction(body))},
        addMessage:()=>{dispatch(addMessageCreateAction())}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)