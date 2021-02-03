import React from 'react';
import stail from './Header.module.css'
import img from '../img/logo.png'
import svg from '../img/clipart.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={stail.header}>
            <div className={stail.container}>
                <img className={stail.logo} src={img} alt="logo"/>
                <form className={stail.search}>
                    <input className={stail.search__input} type="text" placeholder='Search'/>
                    <button className={stail.search_button} ></button>
                </form>
                <div className={stail.containe}>
                    <nav className={stail.nav}>
                        <NavLink to='/home' className={stail.nav__link}>Home</NavLink>
                        <NavLink to='/newsfeed' className={stail.nav__link}>Newsfeed</NavLink>
                        <a href="#" className={stail.nav__link}>Settings</a>
                        <a href="/login" className={stail.nav__link}>Contact</a>
                        {props.isAuth
                            ? <div className={stail.btn}>{props.login} - <button onClick={props.logout}>Log out</button></div>
                            : <NavLink to={'/login'} className={stail.nav__link}>Login</NavLink>}
                    </nav>
                </div>
                <button className={stail.menu_open}>
                    <img className={stail.img__menu} src={svg} alt="Open menu"/>
                </button>
            </div>
        </div>
    )
}
export default Header;