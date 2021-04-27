import React from 'react';
import {Image} from "@/components/error-boundary/image";
import {getMovieYear} from "@/services/movie-services";

export const MovieContent = ({movie}) => {
    return(
        <div className="container movie">
            <div className="movie_image">
               <Image path={movie.poster_path} title={movie.title}/>
            </div>
            <div className="movie_content">
                <div>
                    <h1 className="movie_title">{movie.title}</h1>
                    <div className="movie_rating">{movie.vote_average}</div>
                </div>
                <div className="movie_tagline">{movie.tagline}</div>
                <div>
                    <div className="movie_year">{getMovieYear(movie.release_date)}</div>
                    <div className="movie_runtime">{`${movie.runtime} min`}</div>
                </div>
                <p className="movie_overview">{movie.overview}</p>
            </div>
        </div>
    )
}