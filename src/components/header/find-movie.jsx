import React from "react";

export const FindMovie = () => {
    return (
        <form className="find-movie">
            <h4>Find your movie</h4>
            <input type="search" placeholder="What do wou want to watch?"/>
            <button>Search</button>
        </form>
    )
}