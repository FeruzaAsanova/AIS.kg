import React from 'react';
import Bayer from "./../news/Bayer.png"
import Basketbol from "./../sport-type/basketbol.png"
import CarouselItem from "reactstrap/es/CarouselItem";
import Carousel from "reactstrap/es/Carousel";

const SlideShow = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="..." alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide"/>
                </div>
            </div>
        </div>

        // <Carousel>
        //     <CarouselItem>
        //         <img
        //             className='d-block w-100'
        //             src={Bayer}
        //             alt='Bayer'
        //         />
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img
        //             className='d-block w-100'
        //             src={Basketbol}
        //             alt='Bayer'
        //         />
        //     </CarouselItem>
        // </Carousel>

    )
}
export default SlideShow;