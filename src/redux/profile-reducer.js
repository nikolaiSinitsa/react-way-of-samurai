import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [{id: 1, message: "Hi, how are you?", likesCount: 15}, {id: 2, name: "It's my firs post", likesCount: 20}],
    profile: null,
    status: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, {id: 5, message: action.postText, likesCount: 20}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id != action.postId)}
        }
        default:
            return state;
    }
}

export const addPostActionCreater = (postText) => ({type: ADD_POST, postText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userID) => async (dispatch) => {
    let data = await profileAPI.getProfile(userID);
    dispatch(setUserProfile(data));
}
export const getStatus = (userID) => async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;