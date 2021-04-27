import {createStore, compose} from "redux";
import {initialState} from './initial-state';
import {types} from "@/store/types";

export const reducer = (state = initialState, {payload, type}) => {
    switch(type){
        case(types.MOVIES_LOADED) :
            const data = payload.replace ? payload.movies.data : [...state.movieData.data, ...payload.movies.data];
            return {
                ...state,
                movieData : {
                    ...state.movieData,
                    data,
                    isLoaded: true,
                }
            }
        case(types.START_LOADING) :
                return {
                    ...state,
                    movieData : {
                        ...state.movieData,
                        isLoaded: false,
                    }
                }
        case(types.MOVIE_REMOVED) :
            const index = state.movieData.data.findIndex(el => el.id === payload);
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    data: [...state.movieData.data.slice(0, index), ...state.movieData.data.slice(index + 1, state.movieData.data.length)]
                }
            }
        case(types.TOGGLE_MODAL) :
            const newState =  {...state};
            newState.modals[payload.modal] = payload.state;
            if(!payload.state) newState.currentMovie = initialState.currentMovie;
            return newState;
        case(types.SET_CURRENT_MOVIE) :
            const currentMovie = state.movieData.data.find(el => el.id === payload.id)
            return {
                ...state,
                currentMovie
            }
        case(types.SET_CURRENT_SORT) :
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    sort: payload
                }
            }
        case(types.SET_CURRENT_FILTER) :
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    filter: payload
                }
            }
        default :
            return state;
    }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;

export const store = createStore(reducer, composeEnhancers());
