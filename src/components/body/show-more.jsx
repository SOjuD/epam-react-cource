import React, {useCallback} from "react";
import {useMovies} from "@/hooks";

export const ShowMore = ({offset, sort, filter}) => {
    const getMovies = useMovies();
    const getMoreMovies = useCallback(() => {
        getMovies({offset, sort, filter}, false)
    }, [offset, sort]);

    return(
        <button className="show-more" onClick={getMoreMovies}>Show more</button>
    )
}