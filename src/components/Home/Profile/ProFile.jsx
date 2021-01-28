import React from 'react';
import stail from './ProFile.module.css';
import userPhoto from "../../img/4.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const ProFile = (props) => {
    if(!props.profile) {return <Preloader/>}
    return (
        <div className={stail.container}>
            <div className={stail.timeline_cover}>
                <div className={stail.timeline_nav_bar}>
                    <div className={stail.row}>
                        <div className={stail.col_md_3}>
                            <div className={stail.profile_info}>
                                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={stail.profile_photo}/>
                                    <h3>{props.login}</h3>
                                    <p className={stail.text_muted}><ProfileStatus status={props.status} getUpdateStatus={props.getUpdateStatus}/></p>
                            </div>
                        </div>
                        <div className={stail.col_md_9}>
                            <ul className={stail.profile_menu}>
                                <li><a href="#" className={stail.active}>Timeline</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Album</a></li>
                                <li><NavLink to='/friends' href="#">Friends</NavLink></li>
                                <li>1,299 people following her</li>
                                <li>
                                    <button className={stail.btn_primary}>Add Friend</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProFile;