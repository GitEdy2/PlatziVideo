import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import { prototype } from 'file-loader';

const CarouselItem = (props) => {
    
    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite ({
                id, cover, title, year, contentRating, duration
            });
            document.getElementById(id).style.display = 'none';
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        document.getElementById(id).style.display = 'inline';
    }
    
    return (

    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details_icons" 
                    src={playIcon} alt="play"/>

                    {
                        isList ?
                            (
                                <img className="carousel-item__details_icons" 
                                src={removeIcon} 
                                alt="remove" 
                                onClick={() => handleDeleteFavorite(id)}/>
                            )
                            :
                            (
                                <img className="carousel-item__details_icons" 
                                src={plusIcon} 
                                alt="plus" 
                                onClick={handleSetFavorite}
                                id={id}/>
                            )
                    }

                </div>                  
            </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
        </p>
    </div>
)};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite, 
}

export default connect(null, mapDispatchToProps)(CarouselItem);