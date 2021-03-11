import React from 'react';
import {useDispatch} from "react-redux";
import {toggleAddMovie} from "@/store/actions";

export const AddMovieButton = () => {
    const dispatch = useDispatch();
    const showAddMovie = () => dispatch(toggleAddMovie(true));
    return(
        <button className="add-movie-button" onClick={showAddMovie}>+ Add Movie</button>
    )
}