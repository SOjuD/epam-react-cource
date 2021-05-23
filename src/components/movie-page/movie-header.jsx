import React from "react";
import {Link} from "react-router-dom";
import {Logo} from "../header/logo";

export const MovieHeader = () => {
    return(
        <div className="movie_header container">
            <Link to={'/'}>
                <Logo/>
            </Link>
            <Link to={'/'} className="search-button">
            </Link>
        </div>
    )
}