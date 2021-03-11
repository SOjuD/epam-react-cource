import React from 'react';
import './add-movie-styles.sass'
import {AddMovieForm} from "@/components/add-movie-block/add-movie-form";

export const AddMovie = () => {
    return(
        <div className='add-movie'>
            <AddMovieForm />
        </div>
    )
}