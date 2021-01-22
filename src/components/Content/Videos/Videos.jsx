import React from 'react';
import stail from './Videos.module.css';
import MenuBar from "../../Menu_Bar/MenuBar";

const Videos = (props) => {
    return (
        <div className={stail.container}>
            <div className={stail.menu_bar}>
                <MenuBar/>
            Videos
        </div>
        </div>
    )
}
export default Videos;