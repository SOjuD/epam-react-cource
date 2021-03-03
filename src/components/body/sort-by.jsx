import React from "react";
import PropTypes from 'prop-types';

const SortBy = ({variations}) => {
    const varElements = variations.map(el => <option key={el} value={el}>{el}</option>);

    return (
        <form className="sort-by">
            <div className="sort-by_title">sort by</div>
            <select name="sortBy">
                {varElements}
            </select>
        </form>
    )
}

SortBy.propTypes = {
    variations: PropTypes.array.isRequired
}

export {
    SortBy
}