import React, {useCallback} from "react";
import {api} from "@/api";
import {movieRemoved, moviesLoaded, toggleModal} from "@/store/actions";
import {useDispatch, useSelector} from "react-redux";

export const DeleteModal = () => {
    const {id} = useSelector(state => state.currentMovie);
    const {offset, limit} = useSelector(state => state.movieData);
    const dispatch = useDispatch();
    const hideDeleteMovie = useCallback(() => dispatch(toggleModal('deleteModal',false)), []);
    const useDeleteMovie = (e) => {
        e.preventDefault();
        api.deleteMovie(id).then(res => {
            if(res === 204){
                dispatch(movieRemoved(id))
                return Promise.resolve()
            }
            throw new Error(res.status)
        }).then(() => {
            api.getMovies(offset + limit,1).then(res => {
                dispatch(moviesLoaded(res))
            })
            hideDeleteMovie();
        }).catch(e => {
            console.error(e)
        })
    };
    return (
        <form className="delete-modal" onSubmit={useDeleteMovie}>
            <div className="close" onClick={hideDeleteMovie}>✖</div>
            <h4 className="delete-modal-title">Delete Movie</h4>
            <p>Are you sure you want to delete this movie?</p>
            <div className="buttons">
                <button type="submit">Confirm</button>
            </div>
        </form>
    )
}