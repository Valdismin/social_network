import {addMessageCreateAction, updateNewMassageCreateAction} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AddMessageType, AddPostType, stateAllType, updateNewMessageType, updateNewPostType} from "../../redux/store";


let mapStateToProps = (state:stateAllType) => {
    return {
        dialogsPropsAll:state.dialogsPropsAll
    }
}
let mapDispatchToProps = (dispatch:(action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => void)=> {
    return {
        onMessageChange:(body:string)=>{dispatch(updateNewMassageCreateAction(body))},
        addMessage:()=>{dispatch(addMessageCreateAction())}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)