import React from "react";
import {Link} from "react-router-dom";
import searchIcon from '@/assets/img/search.svg';
import logo from '@/assets/img/logo.svg';

export const MovieHeader = () => {
    return(
        <div className="movie_header container">
            <Link to={'/'}>
                <img src={logo} alt="site name" className="logo"/>
            </Link>
            <Link to={'/'} className="search-button">
                <img src={searchIcon} alt="search"/>
            </Link>
        </div>
    )
}