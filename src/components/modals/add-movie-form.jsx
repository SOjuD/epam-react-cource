import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "@/store/actions";
import {api} from '@/api';

export const AddMovieForm = () => {
    const dispatch = useDispatch();
    const {currentMovie, availableFilter} = useSelector(state => state);
    const hideAddMovie = useCallback(() => dispatch(toggleModal('addMovieModal',false)), []);
    const showSuccessModal = useCallback(() => dispatch(toggleModal('successModal',true)), []);
    const showFailedModal = useCallback(() => dispatch(toggleModal('failedModal',true)), []);
    const addMovie = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            title: formData.get('title'),
            tagline: 'tags',
            vote_average: formData.get,
            vote_count: 0,
            release_date: formData.get('date'),
            poster_path: formData.get('url'),
            overview: formData.get('overview'),
            budget: 0,
            revenue: 0,
            genres: formData.getAll('genre'),
            runtime: +formData.get('runtime')
        }
        if(currentMovie.id) data.id = currentMovie.id;
        const request = data.id ? api.updateMovie : api.addMovie;
        request(data).finally(() => {
            hideAddMovie();
        }).then(res => {
            showSuccessModal();
        }).catch(e => {
            showFailedModal();
            console.error(e)
        })
    },[currentMovie.id])
    return (
        <form onSubmit={addMovie} className="add-movie-form">
            <div className="close" onClick={hideAddMovie}>✖</div>
            <h4>Add Movie</h4>
            <label>
                <span>Title</span>
                <input type="text" required placeholder="please type title here" name="title" defaultValue={currentMovie.title}/>
            </label>
            <label>
                <span>Release date</span>
                <input type="date" required placeholder="please type date here" name="date" defaultValue={currentMovie.release_date}/>
            </label>
            <label>
                <span>Poster URL</span>
                <input type="text" required placeholder="please type url here" name="url" defaultValue={currentMovie.poster_path}/>
            </label>
            <label>
                <span>Genre</span>
                <select name="genre" required multiple   size={3} defaultValue={currentMovie.genres}>
                    {availableFilter.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
            </label>
            <label>
                <span>Overview</span>
                <textarea placeholder="please type overview here" name="overview" required defaultValue={currentMovie.overview}/>
            </label>
            <label>
                <span>Runtime</span>
                <input type="number" required placeholder="please type runtime here" name="runtime" defaultValue={currentMovie.runtime}/>
            </label>
            <label>
                <span>Rating</span>
                <input type="number" required placeholder="please type rating here" name="rating" defaultValue={currentMovie.rating}/>
            </label>

            <div className="buttons">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}