export const initialState = {
    movieData: {
        isLoaded: false,
        data: []
    },
    modals:{
        addMovieModal: false,
        deleteModal: false
    },
    currentMovie: {
        id: null,
        title: null,
        tagline: null,
        vote_average: null,
        vote_count: null,
        release_date: null,
        poster_path: null,
        overview: null,
        budget: null,
        revenue: null,
        genres: [],
        runtime: null
    }
};