import React, {useState, useCallback} from "react";
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
    const showDeleteModal = useCallback(() => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('deleteModal', true))
    }, [movie.id]);
    const showAddMovieModal = useCallback(() => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('addMovieModal', true));
    }, [movie.id]);
    const changeToDefaultImage = () => {
        setImagePath(defaultImage);
    }
    const getMovieYear = useCallback((date) => {
        const separator = '-';
        const index = date.indexOf(separator);
        return date.slice(0, index)
    }, []);
    const getGenres = useCallback((genres) => genres.join(', '), []);

    return (
        <div className="movie-list_item_wrap">
            <div className="movie-list_item">
                <div className={!isShowOptions ? "movie-list_item_dots" : "movie-list_item_cross"} onClick={toggleOptions}>{isShowOptions ? '✖' : '...'}</div>
                {isShowOptions && <Options showDeleteModal={showDeleteModal} showAddMovieModal={showAddMovieModal}/>}
                <img src={imagePath} onError={changeToDefaultImage} alt={movie.title} />
                <div className="movie-list_item_description">
                    <h2 className="movie-list_item_title">{movie.title}</h2>
                    <div className="movie-list_item_year">{getMovieYear(movie.release_date)}</div>
                    <div className="movie-list_item_genres">{getGenres(movie.genres)}</div>
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
