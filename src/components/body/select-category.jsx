import React, {useCallback, useRef} from "react";
import PropTypes from 'prop-types'
import {useMovies} from "@/hooks";

const SelectCategory = ({categories, quantity, sort, filter}) => {
    const ref = useRef(null);
    const getMovies = useMovies();
    const getSortedMovies = useCallback(() => {
        getMovies({
            offset: 0,
            quantity,
            sort,
            filter: new FormData(ref.current).getAll('genre')
        }, true);
    }, [sort, quantity])

    const catElements = categories.map(el => {
        return(
            <label key={el} className="cat-select">
                <input type="checkbox" defaultChecked={filter.includes(el)} name="genre" value={el}/>
                <span>{el}</span>
            </label>
        )
    })
    return(
        <form className="select-category" ref={ref} onChange={getSortedMovies}>
            {catElements}
        </form>
    )
}

SelectCategory.propTypes = {
    categories: PropTypes.array.isRequired
}

export {
    SelectCategory
}