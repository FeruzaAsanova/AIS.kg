import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../logo.svg"
const Header = () => {
    console.log(window.location.pathname)
    return (
        <header style={{
            background: window.location.pathname !== "/" && "#ffffff",
        }}>
            {/*<header>*/}
            <div className="logo">
                <img src={Logo} alt=""/>

            </div>
            <div className="navBar">
                <div className="localisation">
                    <select>
                        <option value="">ru</option>
                        <option value="">kg</option>
                    </select>
                    {/*<a>ВОЙТИ</a>*/}
                </div>
                <div className="navigation">
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/federation'>Федерации</NavLink>
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/rating'>Рейтинг</NavLink>
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/competition'>Соревновании</NavLink>
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/news'>Новости</NavLink>
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/about-us'>О нас</NavLink>
                    <NavLink style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} to='/contacts'>Контакты</NavLink>
                    <FontAwesomeIcon style={{
                        color: window.location.pathname !== "/" && "#000000"
                    }} icon={faSearch}/>
                </div>
            </div>

        </header>
    )
}
export default Header;