import {addPostCreateAction} from "../../../redux/porfile_reducer";
import {MyPosts} from "./MyPosts";
import {AddPostType} from "../../../redux/store";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";


let mapStateToProps = (state:stateType) => {
    return {
        postsPropsAll:state.postsPropsAll
    }
}
let mapDispatchToProps = (dispatch:(action: AddPostType ) => void)=> {
    return {
        addPost:(newPost:string)=>{dispatch(addPostCreateAction(newPost))}
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)