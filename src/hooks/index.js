import {api} from "@/api";
import {moviesLoaded, setCurrentSort, startLoading} from "@/store/actions";
import {useDispatch} from "react-redux";

export function useMovies (){
    const dispatch = useDispatch();

    return (params, replace) => {
        dispatch(startLoading());
        params.sort && dispatch(setCurrentSort(params.sort));
        api.getMovies(params).then(res => {
            dispatch(moviesLoaded(res, replace))
        }).catch(() => {
            dispatch(moviesLoaded({data: []}))
        })
    }
}
