import React, {useEffect, useState} from "react";
import axios from 'axios';
import Pagination from "./pagination";
import Posts from "./Posts";
import "./news.css"
import Bayer from "./Bayer.png";
const NewsComponent=({})=>{
    let info = [
        {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        }, {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },{
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        },
        {
            name: "«Байер» снизит стоимость Кая Хаверца.",
            img: Bayer
        }

    ]
    return(
        <div className="news-component">
            <h1>Новости</h1>
            <div className="main-select-sport">
                <div className="select-sport">
                    <p>Выберите вид спорта</p>
                    <select>
                        <option value="">Выберите вид спорта </option>
                        <option value="national">Национальные виды спорта</option>
                        <option value="national">Олимпийские виды спорта</option>
                        <option value="national">Неолимпийские виды спорта</option>
                        <option value="national">Виды спортов Пара и Сурдо (ЛОВЗ)</option>
                    </select>
                </div>
                <div className="select-sport">
                    <p> Национальные виды спорта</p>
                    <select>
                        <option value="">Выберите вид спорта</option>
                        <option value="">kg</option>
                    </select>
                </div>
            </div>
            {/*<div>*/}
            {/*    <img src={Bayer} alt=""/>*/}
            {/*    <p>Баскетбол</p>*/}
            {/*    <h4>"Байер" снизит стоимость Кая Хаверца.</h4>*/}
            {/*    <p>Новая модель организационной деятельности<br/>*/}
            {/*    способствует подготовки и реализации системы<br/>*/}
            {/*    обучения кадров, соответствует насущным <br/>*/}
            {/*    потребностям.Значимость этих проблем настолько .</p>*/}
            {/*    <a href="">Подробнее...</a>*/}
            {/*</div>*/}
            <div className="wrapper-new style">
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

        </div>
    )
}


export default NewsComponent;