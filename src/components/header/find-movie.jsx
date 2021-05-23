import React, {useCallback} from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";

export const FindMovie = () => {

    const debounceSearch = useCallback(debounce(
        (value) => {
            if(value) history.replace(`/search/${value}`)
            else history.push('/')
        },
        500),
        [])

    const history = useHistory();
    const searchMovie = useCallback((e) => {
        debounceSearch(e.target.value)
    }, [])
    return (
        <form className="find-movie">
            <h4>Find your movie</h4>
            <input type="search" onChange={searchMovie} name="search" placeholder="What do wou want to watch?"/>
        </form>
    )
}