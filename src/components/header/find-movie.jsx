import React, {useRef, useCallback} from "react";
import {useMovies} from "@/hooks";

export const FindMovie = () => {
    const getMovies = useMovies();
    const inputRef = useRef(null);
    const searchMovie = useCallback((e) => {
        e.preventDefault()
        getMovies({
            search: inputRef.current.value
        }, true);
        inputRef.current.value = '';
    }, [])
    return (
        <form className="find-movie" onSubmit={searchMovie}>
            <h4>Find your movie</h4>
            <input type="search" name="search" placeholder="What do wou want to watch?" ref={inputRef}/>
            <button>Search</button>
        </form>
    )
}