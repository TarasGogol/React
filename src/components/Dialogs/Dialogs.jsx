import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) =>{
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = "Taras" id="1"/>
                <DialogItem name = "Viktor" id="2"/>
                <DialogItem name = "Vasyl" id="3"/>
                <DialogItem name = "Sasha" id="4"/>
                <DialogItem name = "Valera" id="5"/>
                <DialogItem name = "Petro" id="6"/>
                <DialogItem name = "Vika" id="7"/>
            </div>
            <div className={s.messages}>
                <Message message = "Hi"/>
                <Message message = "How are you?"/>
                <Message message = "Yo"/>
            </div>
        </div>
    )
}
export default Dialogs;