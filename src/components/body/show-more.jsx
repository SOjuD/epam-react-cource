import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {api} from "@/api";
import {moviesLoaded, startLoading} from "@/store/actions";

export const ShowMore = () => {
    const dispatch = useDispatch();
    const {offset, limit} = useSelector(state => state.movieData);


    const getMoreMovies = () => {
        dispatch(startLoading())
        api.getMovies(offset + api.defaultMovieListLength).then(res => {
            dispatch(moviesLoaded(res))
        })
    }

    return(
        <button className="show-more" onClick={getMoreMovies}>Show more</button>
    )
}