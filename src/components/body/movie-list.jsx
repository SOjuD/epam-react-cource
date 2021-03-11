import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Spinner from '@/components/spinner';
import {NotFound} from "@/components/body/not-found";
import {MovieListItem} from "@/components/body/movie-list-item";
import {api} from "@/api";
import {moviesLoaded} from "@/store/actions";


const MovieList = () => {
    const {isLoaded, data: movies} = useSelector(state => state.movieData);
    const dispatch = useDispatch();

    useEffect(() => {
        !movies.length && api.getMovies().then(res => {
            dispatch(moviesLoaded(res))
        }).catch(() => {
            dispatch(moviesLoaded({data: []}))
        })
    }, [movies])

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