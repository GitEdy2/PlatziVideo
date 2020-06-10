import React from 'react'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="People" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details_icons" src="images/play-icon.png" alt="play"/>
                    <img className="carousel-item__details_icons" src="images/plus-icon.png" alt="plus"/>
                </div>                  
            </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
);

export default CarouselItem;