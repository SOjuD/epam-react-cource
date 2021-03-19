import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import headerBgImage from "@/assets/img/header_bg.jpg";
import "./movie-page-style.sass";
import {api} from '@/api';
import {Spinner} from "@/components/spinner";
import {MovieContent} from "@/components/movie-page/movie-content";
import {MovieHeader} from "@/components/movie-page/movie-header";

export const MoviePage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        api.getMovie(id).then(res => {
            setMovie(res);
        })
    }, [id])
    return(
        <header className="moviePage" style={{backgroundImage: `url(${headerBgImage})`}}>
            <MovieHeader/>
            {!movie ? <Spinner/> : <MovieContent movie={movie}/>}
        </header>
    )
}