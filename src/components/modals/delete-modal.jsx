import React from "react";
import {api} from "@/api";
import {movieRemoved, moviesLoaded} from "@/store/actions";
import {useDispatch} from "react-redux";

const DeleteModal = ({id}) => {
    const dispatch = useDispatch();
    const deleteMovie = () =>{
        api.deleteMovie(id).then(res => {
            if(res === 204){
                dispatch(movieRemoved(movie.id))
                return Promise.resolve()
            }
            throw new Error(res.status)
        }).then(() => {
            api.getMovies(offset + limit,1).then(res => {
                dispatch(moviesLoaded(res))
            })
        }).catch(e => {
            console.error(e)
        })
    };
    return (
        <div className="delete-modal">
            deleteModal
            <button type="submit" onClick={deleteMovie}>Confirm</button>
        </div>
    )
}