import React from "react";
import {useSelector} from "react-redux";

export const WasFound = () => {
    const quantity = useSelector(state => state.movieData.data.length)
    return(
        <div className="was-found">
            <span>{quantity}</span> movies found
        </div>
    )
}