import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    return <Dialogs updateNewMessageBody={onMessageChange}
                    sendMessage={addMessage}
                    dialogsPage={state}/>
}
export default DialogsContainer;