import React from "react";

export const WasFound = ({quantity}) => {
    return(
        <div className="was-found">
            <span>{quantity}</span> movies found
        </div>
    )
}