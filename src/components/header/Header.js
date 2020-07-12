import React from "react";

const Header =()=>{
    return(
        <header>
             <div className="wrapper">
                <div className="logo">logo</div>
                <div className="nav-bar">
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
                        <i>searching</i>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;