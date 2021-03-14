import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "@/store/actions";

export const AddMovieForm = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.currentMovie) || {};
    const hideAddMovie = () => dispatch(toggleModal('addMovieModal',false));
    const addMovie = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
    }
    return (
        <form onSubmit={addMovie} className="add-movie-form">
            <div className="close" onClick={hideAddMovie}>✖</div>
            <h4>Add Movie</h4>
            <label>
                <span>Title</span>
                <input type="text" placeholder="please type title here" name="title" defaultValue={movie.title}/>
            </label>
            <label>
                <span>Release date</span>
                <input type="date" placeholder="please type date here" title="date" defaultValue={movie.release_date}/>
            </label>
            <label>
                <span>Poster URL</span>
                <input type="text" placeholder="please type url here" title="url" defaultValue={movie.poster_path}/>
            </label>
            <label>
                <span>Genre</span>
                <select title="genre" multiple   size={3} defaultValue={movie.genres}>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Animation">Animation</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Family">Family</option>
                    <option value="Action">Action</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Documentary">Documentary</option>
                </select>
            </label>
            <label>
                <span>Overview</span>
                <input type="text" placeholder="please type overview here" title="overview" defaultValue={movie.overview}/>
            </label>
            <label>
                <span>Runtime</span>
                <input type="number" placeholder="please type runtime here" title="overview" defaultValue={movie.runtime}/>
            </label>

            <div className="buttons">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}