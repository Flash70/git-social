import React from 'react';
import stail from './profile_card.module.css';
import img from '../img/prof.jpg';
import {NavLink} from "react-router-dom";


const profile_card = () => {
    return (
        <div className={stail.card}>
            <div className={stail.profile}>
                <img className={stail.logo} src={img} alt="user"/>
                <h4>
                    <a href="#" className={stail.text_white}>Di Flash</a>
                </h4>
                <a href="#" className="text-white">
                    <i className="ion ion-android-person-add"></i>
                    1,299 followers</a>
            </div>
        </div>
    )
}
export default profile_card;