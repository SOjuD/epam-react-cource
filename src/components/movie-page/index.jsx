import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import "./movie-page-style.sass";
import {api} from '@/api';
import {Spinner} from "@/components/spinner";
import {MovieContent} from "@/components/movie-page/movie-content";
import {MovieHeader} from "@/components/movie-page/movie-header";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentMovie} from "../../store/actions";

export const MoviePage = () => {
    const {id} = useParams();
    const currentMovie = useSelector(state => state.currentMovie);
    const dispatch = useDispatch();
    useEffect(() => {
        currentMovie.id || api.getMovie(id).then(res => {
            dispatch(setCurrentMovie(res))
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    }, [id])
    return(
        <header className="moviePage">
            <MovieHeader/>
            {!currentMovie.id ? <Spinner/> : <MovieContent movie={currentMovie}/>}
        </header>
    )
}