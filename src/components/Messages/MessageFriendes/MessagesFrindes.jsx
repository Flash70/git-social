import React from 'react';
import stail from '../Messages.module.css';

const MessageFrindes = (props) => {
    return (
        <div className={stail.message}>
            <div className={stail.message}>{props.message}</div>
        </div>
    )
}

export default MessageFrindes;