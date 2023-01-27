import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }
            let onMessageChange = (body) => {
                store.dispatch(updateNewMessageActionCreator(body))
            }
            return <Dialogs updateNewMessageBody={onMessageChange}
                            sendMessage={addMessage}
                            dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;