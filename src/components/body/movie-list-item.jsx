import React, {useState} from "react";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import defaultImage from '@/assets/img/default.jpg';
import {setCurrentMovie, toggleModal} from "@/store/actions";

const Options = ({showDeleteModal, showAddMovieModal}) => {
    return(<ul className="movie-list_item_options">
        <li onClick={showAddMovieModal}>Edit</li>
        <li onClick={showDeleteModal}>Delete</li>
    </ul>)
}

const MovieListItem = ({movie}) => {
    const [imagePath, setImagePath] = useState(movie.poster_path);
    const [isShowOptions, toggleIsShowOptions] = useState(false);
    const toggleOptions = () => toggleIsShowOptions(!isShowOptions);
    const dispatch = useDispatch();
    const showDeleteModal = () => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('deleteModal', true))
    };
    const showAddMovieModal = () => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('addMovieModal', true));
    };
    const changeToDefaultImage = () =>{
        setImagePath(defaultImage);
    }
    const getMovieYear = () => {
        const separator = '-';
        const index = movie.release_date.indexOf(separator);
        return movie.release_date.slice(0, index)
    }
    const getGenres = () => movie.genres.join(', ');

    return (
        <div className="movie-list_item_wrap">
            <div className="movie-list_item">
                <div className={!isShowOptions ? "movie-list_item_dots" : "movie-list_item_cross"} onClick={toggleOptions}>{isShowOptions ? '✖' : '...'}</div>
                {isShowOptions && <Options showDeleteModal={showDeleteModal} showAddMovieModal={showAddMovieModal}/>}
                <img src={imagePath} onError={changeToDefaultImage} alt={movie.title} />
                <div className="movie-list_item_description">
                    <h2 className="movie-list_item_title">{movie.title}</h2>
                    <div className="movie-list_item_year">{getMovieYear()}</div>
                    <div className="movie-list_item_genres">{getGenres()}</div>
                </div>
            </div>
        </div>
    )
}

PropTypes.propTypes = {
    movie: PropTypes.object.isRequired
}

export {
    MovieListItem
}
