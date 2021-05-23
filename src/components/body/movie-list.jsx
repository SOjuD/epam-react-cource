import React from 'react';

import {Spinner} from '@/components/spinner';
import {NotFound} from "@/components/body/not-found";
import {MovieListItem} from "@/components/body/movie-list-item";

const MovieList = ({movies, isLoaded}) => {

    return(
        <React.Fragment>
            {!movies.length ? <NotFound /> :
             movies.map(el => <MovieListItem key={el.id} movie={el} />)}
            {!isLoaded && <Spinner />}
        </React.Fragment>
    )
}

export {
    MovieList
}