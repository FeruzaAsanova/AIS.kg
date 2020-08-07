import React from 'react';
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneVolume, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../logo ais.svg";
const Footer = () => {
    return (
        <footer>

            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div>
                    <h1>О нас</h1>
                    <a href="">Федерации</a>
                    <a href="">Рейтинг</a>
                    <a href="">Соревнование</a>
                    <a href="">О нас</a>
                    <a href="">Новости</a>


                </div>
                <div>
                    <h1>Контакты</h1>
                    <div className="self-info">
                        <p><FontAwesomeIcon icon={faEnvelope}/> AIS.kg@gmail.com</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/>Г. Бишкек ул. Токтогула 100/1</p>
                        <p><FontAwesomeIcon icon={faPhoneVolume}/>0707256789</p>
                    </div>
                </div>
                <div>
                    <h1>Социальные сети</h1>
                    <div className="social-media">
                    <a href=""><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;