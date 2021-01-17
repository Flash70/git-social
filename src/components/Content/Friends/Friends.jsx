import React from 'react';
import stail from './Friends.module.css';
import img_card from '../../img/1.jpg'
import img_card_info from '../../img/3.jpg'


const Friends = (props) => {
    return (
        <div className={stail.container}>
            <div className={stail.friend_card}>
                <img src={img_card} alt="profile-cover" className={stail.img_responsive}/>
            </div>
            <div className={stail.card_info}>
                <img src={img_card_info} alt="user" className={stail.profile_photo_lg}/>
            </div>
            <div className={stail.friend_info}>
                <h5><a href="#" className={stail.profile_link}>Sophia Lee</a></h5>
                <a href="#" className={stail.pull_right + stail.text_green}>My Friend</a>
                <p>Student at Harvard</p>
            </div>

        </div>

    )
}
export default Friends;