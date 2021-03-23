import {types} from "@/store/types";

export const moviesLoaded = (movies, replace) => ({
    type: types.MOVIES_LOADED,
    payload: {
        movies,
        replace
    }
});

export const startLoading = () => ({
    type: types.START_LOADING
});

export const movieRemoved = (id) => ({
    type: types.MOVIE_REMOVED,
    payload: id
})

export const toggleModal = (modal, state) => ({
    type: types.TOGGLE_MODAL,
    payload: {modal, state}
})

export const setCurrentMovie = (movie) => ({
    type: types.SET_CURRENT_MOVIE,
    payload: movie
})

export const setCurrentSort = sort => ({
    type: types.SET_CURRENT_SORT,
    payload: sort
})