import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.item + ' ' + s.active}> name1</div>
                <div className={s.item}> name2</div>
                <div className={s.item}> name3</div>
                <div className={s.item}> name4</div>
            </div>
            <div className={s.dialogMessages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What's new?</div>
                <div className={s.message}>How are you doing?</div>
            </div>
        </div>
    );

};
export default Dialogs;