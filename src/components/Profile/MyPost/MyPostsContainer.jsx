import React  from 'react';
import {addPostActionCreater} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreater(postText));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyPosts);
