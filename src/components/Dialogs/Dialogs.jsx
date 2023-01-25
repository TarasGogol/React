import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name = {d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message = {m.message}/>)

    let newPostElement = React.createRef();

    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewMessageActionCreator(text));
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newPostElement}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessage}/>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}
export default Dialogs;