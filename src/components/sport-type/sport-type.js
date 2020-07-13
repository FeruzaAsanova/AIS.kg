import React from "react";
import "./sport-type.css"
import basketbol from "./basketbol.png"

const SportType = () => {
    let info=[
        {
            name:"Национальные виды спорта",
            img:[{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            } ]
        },{
            name:"Олимпийские виды спорта",
            img:[{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            } ]
        },{
            name:"Неолимпийские виды спорта",
            img:[{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            } ]
        },{
            name:"Виды спортов Пара и Сурдо (ЛОВЗ)",
            img:[{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            },{name:"Баскетбол",
                description:"Спортивная командная игра с мячом",
                img:basketbol
            } ]
        }
    ]
return(
        <div className="wrapper-sport">
            <h3>Виды спорта</h3>
            {info.map((item, id) => (
                <div key={id} className="sport-type">
                    <h2>{item.name}</h2>
                    <div>
                        {item.img.map((item, id) => (
                            <div key={id} className="sport-name">
                                <img src={item.img} style={{width:"100%"}} alt="" />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

)
}
export default SportType;