import React from "react";

import './body-style.sass';
import {SelectCategory} from "@/components/body/select-category";
import {SortBy} from "@/components/body/sort-by";
import {MovieList} from "@/components/body/movie-list";
import {WasFound} from "@/components/body/was-found";
import {ShowMore} from "@/components/body/show-more";

export const Body = () => {
    const categories = ['all', 'documentary', 'comedy', 'crime'];
    const variations = ['date', 'rating'];
    return (
        <main className="body">
             <div className="container filtering">
                    <SelectCategory categories={categories}/>
                    <SortBy variations={variations}/>
             </div>
            <div className="container">
                <WasFound/>
            </div>
            <div className="container movie-list">
                <MovieList/>
            </div>
            <div className="container show-more_wrap">
                <ShowMore/>
            </div>
        </main>
    )
}