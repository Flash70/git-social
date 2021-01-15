import React from 'react';
import stail from './Header.module.css'
import img from '../img/logo.png'
import svg from '../img/clipart.png'

const Header = () => {
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
                        <a href="#" className={stail.nav__link}>Home</a>
                        <a href="#" className={stail.nav__link}>Newsfeed</a>
                        <a href="#" className={stail.nav__link}>Settings</a>
                        <a href="#" className={stail.nav__link}>Contact</a>
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