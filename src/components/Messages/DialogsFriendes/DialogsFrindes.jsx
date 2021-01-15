import React from 'react';
import stail from '../Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogsFrindes = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={stail.dialod + ' ' + stail.activLink}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogsFrindes;