import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Propan"},
        {id: 3, name: "Butan"},
        {id: 4, name: "Iran"},
        {id: 5, name: "Koran"},
        {id: 6, name: "Varan"},
    ];
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "What's new?"},
        {id: 3, message: "How are you doing?"},
    ];
    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.dialogMessages}>
                {messageElements}
            </div>
        </div>
    );

};
export default Dialogs;