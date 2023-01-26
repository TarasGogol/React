const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage,
            };
            state.messages.push(newMessage);
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const  updateNewMessageActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE', newMessage : text})
export default dialogsReducer;