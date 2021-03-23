export const initialState = {
    movieData: {
        isLoaded: false,
        data: [],
        sort: {
            title: 'default',
        },
    },
    modals:{
        addMovieModal: false,
        deleteModal: false,
        successModal: false,
        failedModal: false
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
    },
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

    ]
};