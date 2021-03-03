import React from "react";
import PropTypes from 'prop-types'

const SelectCategory = ({categories}) => {

    const catElements = categories.map(el => {
        return(
            <label key={el} className="cat-select">
                <span>{el}</span>
                <input type="radio" value={el}/>
            </label>
        )
    })
    return(
        <form className="select-category">
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