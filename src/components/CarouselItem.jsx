import React from 'react'
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="People" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details_icons" src={playIcon} alt="play"/>
                    <img className="carousel-item__details_icons" src={plusIcon} alt="plus"/>
                </div>                  
            </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
);

export default CarouselItem;