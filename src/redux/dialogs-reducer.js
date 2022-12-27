const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    Dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ],
    Messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ],
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                Messages: [ ...state.Messages, {id: 5, message: action.newPostText} ],
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreater = (newPostText) => ({type: SEND_MESSAGE, newPostText});
export default dialogsReducer;