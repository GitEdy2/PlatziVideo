import React from 'react';
import classNames from 'classnames';
import { getVideoSearch } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Search.scss';


const Search = (props) => {

    const { isHome } = props;

    const inputStyle = classNames('input', {
        isHome
    });

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            props.getVideoSearch(event.target.value);
        }
        
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>

            <input 
                className={inputStyle} 
                type="text" 
                placeholder="Buscar..."
                onKeyUp={handleEnter}
            />

        </section>
    )
};

const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    }
}

const mapDispatchToProps = {
    getVideoSearch,
}





export default connect(mapStateToProps, mapDispatchToProps)(Search);