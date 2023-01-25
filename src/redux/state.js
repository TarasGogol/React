const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 16},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Ya'},
            ],
            dialogs: [
                {id: 1, name: 'Taras'},
                {id: 2, name: 'Vasyl'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Vika'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Dima'},
            ],
            newMessage: "Vitannya"
        },

    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessage,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = "";
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const  updateNewMessageActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE', newMessage : text})

export default store;
window.store = store;