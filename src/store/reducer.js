import {createStore, compose} from "redux";
import {initialState} from './initial-state';
import {types} from "@/store/types";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(types.MOVIES_LOADED) :
            return {
                ...state,
                movieData : {
                    ...action.payload,
                    data: [...state.movieData.data, ...action.payload.data],
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
            const index = state.movieData.data.findIndex(el => el.id === action.payload);
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    data: [...state.movieData.data.slice(0, index), ...state.movieData.data.slice(index + 1, state.movieData.data.length)]
                }
            }
        case(types.TOGGLE_ADD_MOVIE) :
            return {
                ...state,
                isShowAddMovie: action.payload
            }
        default :
            return state;
    }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;

export const store = createStore(reducer, composeEnhancers());
