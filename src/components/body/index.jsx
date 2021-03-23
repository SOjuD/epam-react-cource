import React, {useEffect} from "react";

import './body-style.sass';
import {SelectCategory} from "@/components/body/select-category";
import {SortBy} from "@/components/body/sort-by";
import {MovieList} from "@/components/body/movie-list";
import {WasFound} from "@/components/body/was-found";
import {ShowMore} from "@/components/body/show-more";
import {useSelector} from "react-redux";
import {useMovies} from "@/hooks";

export const Body = () => {
    const categories = ['all', 'documentary', 'comedy', 'crime'];
    const {isLoaded, data: movies, sort} = useSelector(state => state.movieData);
    const sortBy = useSelector(state => state.availableSort);
    const getMovies = useMovies();

    useEffect(() => {
        getMovies({}, true);
    }, []);

    return (
        <main className="body">
             <div className="container filtering">
                    <SelectCategory categories={categories}/>
                    <SortBy sortBy={sortBy} quantity={movies.length} current={sort.title}/>
             </div>
            <div className="container">
                <WasFound quantity={movies.length}/>
            </div>
            <div className="container movie-list">
                <MovieList isLoaded={isLoaded} movies={movies}/>
            </div>
            <div className="container show-more_wrap">
                <ShowMore offset={movies.length} sort={sort}/>
            </div>
        </main>
    )
}