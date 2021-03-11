import React from "react";
import {useDispatch} from "react-redux";
import {toggleAddMovie} from "@/store/actions";

export const AddMovieForm = () => {
    const dispatch = useDispatch();
    const hideAddMovie = () => dispatch(toggleAddMovie(false));
    const addMovie = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
    }
    return (
        <form onSubmit={addMovie}>
            <div className="close" onClick={hideAddMovie}>✖</div>
            <h4>Add Movie</h4>
            <label>
                <span>Title</span>
                <input type="text" placeholder="please type title here" name="title"/>
            </label>
            <label>
                <span>Release date</span>
                <input type="date" placeholder="please type date here" title="date"/>
            </label>
            <label>
                <span>Movie URL</span>
                <input type="text" placeholder="please type url here" title="url"/>
            </label>
            <label>
                <span>Genre</span>
                <select title="genre" multiple   size={3}>
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
                <input type="text" placeholder="please type overview here" title="overview"/>
            </label>
            <label>
                <span>Runtime</span>
                <input type="number" placeholder="please type runtime here" title="overview"/>
            </label>

            <div className="buttons">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}