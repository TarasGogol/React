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

    let dialogsData = [
        {id:1, name:'Taras'},
        {id:2, name:'Vasyl'},
        {id:3, name:'Viktor'},
        {id:4, name:'Vika'},
        {id:5, name:'Valera'},
        {id:6, name:'Dima'},
    ];
    let messagesData = [
        {id:1, message:'Hello'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Ya'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = {dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message = {messagesData[0].message}/>
                <Message message = {messagesData[1].message}/>
            </div>
        </div>
    )
}
export default Dialogs;