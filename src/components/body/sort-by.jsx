import React, {useCallback, useRef} from "react";
import PropTypes from 'prop-types';
import {useMovies} from "@/hooks";

export const SortBy = ({sortBy, quantity, current}) => {
    const ref = useRef(null);
    const varElements = sortBy.map(el => <option key={el.title} value={el.title}>{el.title}</option>);
    const getMovies = useMovies();
    const getSortedMovies = useCallback(() => {
        getMovies({
            offset: 0,
            limit: quantity,
            sort: sortBy.find(el => el.title === ref.current.value)
        }, true);
    }, [quantity])

    return (
        <div className="sort-by">
            <div className="sort-by_title">sort by</div>
            <select name="sortBy" onChange={getSortedMovies} ref={ref} value={current}>
                {varElements}
            </select>
        </div>
    )
}

SortBy.propTypes = {
    sortBy: PropTypes.array.isRequired
}
