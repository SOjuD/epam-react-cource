import React from "react";

export const emptyMovie = {
    id: null,
    title: '',
    tagline: 'tagline',
    vote_average: 1,
    vote_count: 1,
    release_date: new Date(),
    poster_path: '',
    overview: '',
    budget: 1,
    revenue: 1,
    genres: [],
    runtime: 1
};


export const initialState = {
    movieData: {
        isLoaded: true,
        data: [],
        sort: {
            title: 'default',
        },
        filter: []
    },
    modals:{
        addMovieModal: false,
        deleteModal: false,
        successModal: false,
        failedModal: false
    },
    currentMovie: emptyMovie,
    availableSort: [
        {
            title: 'default',
        },
        {
            title: 'date up',
            sortBy: 'release_date',
            sortOrder: 'asc',
        },
        {
            title: 'date down',
            sortBy: 'release_date',
            sortOrder: 'desc',
        },
        {
            title: 'rating up',
            sortBy: 'vote_average',
            sortOrder: 'asc',
        },
        {
            title: 'rating down',
            sortBy: 'vote_average',
            sortOrder: 'desc',
        },

    ],
    availableFilter : ['Fantasy', 'Animation', 'Drama', 'Comedy', 'Family', 'Action']
};