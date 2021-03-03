import {createStore, compose} from "redux";
import {initialState} from './initial-state';

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer, composeEnhancers());