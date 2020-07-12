import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SportType from "../components/sport-type/sport-type";
import Text from "../components/banner/text";


const MainPage=()=>{
    return(
        <div>
            <Header/>
            <Text/>
            <SportType/>
            <Footer/>
        </div>
    )
}
export default MainPage;