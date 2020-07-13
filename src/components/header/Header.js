import React from "react";
import "./Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
const Header =()=>{
    return(
        <header>
                <div className="logo">logo</div>
                <div className="navBar">
                    <div className="localisation">
                        <select>
                            <option value="">ru</option>
                            <option value="">kg</option>
                        </select>
                        <a>ВОЙТИ</a>
                    </div>
                    <div className="navigation">
                        <a href="">Федерации</a>
                        <a href="">Рейтинг</a>
                        <a href="">Соревновании</a>
                        <a href="">Новости</a>
                        <a href="">О нас</a>
                        <a href="">Контакты</a>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>

        </header>
    )
}
export default Header;