import React from 'react';
import PropTypes from 'prop-types';
import {NotFound} from "@/components/body/not-fount";
import {MovieListItem} from "@/components/body/movie-list-item";



const MovieList = ({list}) => {
    return(
        !list.length ? <NotFound /> :
        list.map(el => <MovieListItem key={el.id} movie={el}/>)
    )
}

MovieList.propTypes = {
    list: PropTypes.array.isRequired
}

export {
    MovieList
}