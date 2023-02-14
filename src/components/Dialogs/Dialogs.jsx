import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message = {m.message} />)

    let newPostElement = React.createRef();

    let addMessage = () =>{
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Navigate to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newPostElement}
                          onChange={onMessageChange}
                          value={state.newMessage}/>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}
export default Dialogs;