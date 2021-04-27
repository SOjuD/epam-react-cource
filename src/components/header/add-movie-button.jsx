import React from 'react';
import {useDispatch} from "react-redux";
import {toggleModal} from "@/store/actions";

export const AddMovieButton = () => {
    const dispatch = useDispatch();
    const showAddMovie = () => dispatch(toggleModal('addMovieModal', true));
    return(
        <button className="add-movie-button" onClick={showAddMovie}>+ Add Movie</button>
    )
}