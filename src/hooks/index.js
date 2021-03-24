import {api} from "@/api";
import {moviesLoaded, setCurrentFilter, setCurrentSort, startLoading} from "@/store/actions";
import {useDispatch} from "react-redux";

export function useMovies (){
    const dispatch = useDispatch();

    return (params, replace) => {
        dispatch(startLoading());
        if(!params.offset) params.offset = 0;
        if(!params.limit) params.limit = api.defaultMovieListLength;
        if(params.sort && Object.keys(params.sort).length) dispatch(setCurrentSort(params.sort));
        if(Array.isArray(params.filter) && params.filter.length) dispatch(setCurrentFilter(params.filter));
        api.getMovies(params).then(res => {
            dispatch(moviesLoaded(res, replace))
        }).catch(() => {
            dispatch(moviesLoaded({data: []}))
        })
    }
}
