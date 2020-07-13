import React from "react";
import "./news.css";
import Bayer from "./Bayer.png"

const TopNews = () => {
    let info = [
        {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        }, {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },
        {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        }

    ]
    return (

        <div className="wrapper-news">
            {info.map((item, id) => (
                    <div className="new">
                        <img src={item.img} alt=""/>
                        <div className="new-text">
                            <p>Последние новости</p>
                            <h4>{item.name}</h4>
                            <a href="">Подробнее...</a>
                        </div>
                    </div>
            ))}
        </div>

    )
}
export default TopNews;