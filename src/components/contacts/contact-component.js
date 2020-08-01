import React from "react";
import "./contactss.css"

const Contacts = () => {
    return (
        <div className="wrapper-contacts">
            <h1>Контакты</h1>
            <div className="main-info">
                <b>Email:</b> Ais.kg@gmail.com<br/>
                <b>Телефон:</b> +996________________<br/>
                <b>Адрес:</b> Кыргызская Республика, ул.Шабдан Баатыра 4Б<br/>
                <b>Банковские реквизиты для зачисления членских<br/>
                    и вступительных взносов:</b><br/>
                ОЮЛ Ассоциация "  "<br/>
                р/с 1091605143920126 в ОАО "Оптима Банк", БИК 109016<br/>
                ИНН 01902201810406, ОКПО 30021086<br/>
                <b>Банковские реквизиты для зачисления целевых<br/>
                    взносов для пиплметрии (телеметрии):</b><br/>
                ОЮЛ Ассоциация "  "<br/>
                р/с 1180000122495951 в Demir Kyrgyz International Bank,<br/>
                БИК 118005<br/>
                ИНН 01902201810406, ОКПО 30021086<br/>
            </div>
        </div>
    )
}

export default Contacts;