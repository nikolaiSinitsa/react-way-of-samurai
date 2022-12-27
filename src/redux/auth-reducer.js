import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        setStatus(data.messages[0])
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}
export default authReducer;