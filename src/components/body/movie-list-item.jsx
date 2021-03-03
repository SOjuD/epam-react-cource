import React from "react";
import PropTypes from 'prop-types';

const MovieListItem = ({movie}) => {
    return (
        <div className="movie-list_item">
            <a href={movie.link}>
                <img src={movie.poster} alt={movie.name} />
            </a>
            <h2>movie.name</h2>
        </div>
    )
}

PropTypes.propTypes = {
    movie: PropTypes.object.isRequired
}

export {
    MovieListItem
}
