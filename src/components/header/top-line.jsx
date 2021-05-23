import React from 'react';
import {Logo} from "@/components/header/logo";
import {AddMovieButton} from "@/components/header/add-movie-button";

export const TopLine = () => {
    return (
        <div className="top-line">
            <Logo/>
            <AddMovieButton />
        </div>
    )
}