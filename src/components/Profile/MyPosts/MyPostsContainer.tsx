
import {addPostCreateAction, stateType, updateNewPostCreateAction} from "../../../redux/porfile_reducer";
import {MyPosts} from "./MyPosts";
import {AddMessageType, AddPostType, updateNewMessageType, updateNewPostType} from "../../../redux/store";
import {connect} from "react-redux";


let mapStateToProps = (state:stateType) => {
    return {
        postsPropsAll:state.postsPropsAll
    }
}
let mapDispatchToProps = (dispatch:(action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => void)=> {
    return {
        updateNewPostText:(text: string)=>{dispatch(updateNewPostCreateAction(text))},
        addPost:()=>{dispatch(addPostCreateAction())}
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)