import React from "react";
import "./banner.css";
import banner from "./Banner.png"

const Banner = () => {
    return (
        <div className="wrapper-banner">

            <div className='wrapper-banner-text'>
                <p>
                    Мы едины!<br/>
                    Мы за спорт!
                </p>
                <div className="banner-button ">Перейти к соревнованиям</div>
            </div>

        </div>
    )
}
export default Banner;