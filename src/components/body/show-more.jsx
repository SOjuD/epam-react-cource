import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {api} from "@/api";
import {moviesLoaded, startLoading} from "@/store/actions";

export const ShowMore = () => {
    const dispatch = useDispatch();
    const {offset} = useSelector(state => state.movieData);


    const getMoreMovies = useCallback(() => {
        dispatch(startLoading())
        api.getMovies(offset + api.defaultMovieListLength).then(res => {
            dispatch(moviesLoaded(res))
        })
    }, [offset]);

    return(
        <button className="show-more" onClick={getMoreMovies}>Show more</button>
    )
}