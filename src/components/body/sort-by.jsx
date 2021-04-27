import React, {useCallback, useRef} from "react";
import PropTypes from 'prop-types';
import {useMovies} from "@/hooks";

export const SortBy = ({availableSort, quantity, currentSort, filter}) => {
    const ref = useRef(null);
    const varElements = availableSort.map(el => <option key={el.title} value={el.title}>{el.title}</option>);
    const getMovies = useMovies();
    const getSortedMovies = useCallback(() => {
        getMovies({
            offset: 0,
            limit: quantity,
            filter,
            sort: availableSort.find(el => el.title === ref.current.value)
        }, true);
    }, [filter, quantity])

    return (
        <div className="sort-by">
            <div className="sort-by_title">sort by</div>
            <select name="sortBy" onChange={getSortedMovies} ref={ref} value={currentSort}>
                {varElements}
            </select>
        </div>
    )
}

SortBy.propTypes = {
    availableSort: PropTypes.array.isRequired
}
