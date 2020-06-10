import React from 'react'

const CarouselItem = () => (
    <div class="carousel-item">
        <img class="carousel-item__img" src="https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="People" />
            <div class="carousel-item__details">
                <div>
                    <img class="carousel-item__details_icons" src="images/play-icon.png" alt="play"/>
                    <img class="carousel-item__details_icons" src="images/plus-icon.png" alt="plus"/>
                </div>                  
            </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
);

export default CarouselItem;