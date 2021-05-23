import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import './body-style.sass';
import {SelectCategory} from "@/components/body/select-category";
import {SortBy} from "@/components/body/sort-by";
import {MovieList} from "@/components/body/movie-list";
import {WasFound} from "@/components/body/was-found";
import {ShowMore} from "@/components/body/show-more";
import {useSelector} from "react-redux";
import {useMovies} from "@/hooks";

export const Body = () => {
    const state = useSelector(state => state);
    const [isNeedFetch, setIsNeedFetch] = useState(false);
    const {isLoaded, data: movies, sort, filter} = state.movieData;
    const {availableSort, availableFilter} = state;
    const getMovies = useMovies(sort, filter);
    const params = useParams();
    useEffect(() => {
        isNeedFetch && getMovies(params, true);
        setIsNeedFetch(true)
    }, [params]);

    return (
        <main className="body">
             <div className="container filtering">
                    <SelectCategory categories={availableFilter} filter={filter} quantity={movies.length} sort={sort}/>
                    <SortBy availableSort={availableSort} quantity={movies.length} currentSort={sort.title} filter={filter}/>
             </div>
            <div className="container">
                <WasFound quantity={movies.length}/>
            </div>
            <div className="container movie-list">
                <MovieList isLoaded={isLoaded} movies={movies}/>
            </div>
            <div className="container show-more_wrap">
                <ShowMore offset={movies.length} sort={sort} filter={filter}/>
            </div>
        </main>
    )
}