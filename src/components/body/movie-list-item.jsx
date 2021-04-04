import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Image} from "@/components/error-boundary/image";
import {setCurrentMovie, toggleModal} from "@/store/actions";
import {getGenres, getMovieYear} from "@/services/movie-services";

const Options = ({showDeleteModal, showAddMovieModal}) => {
    return(<ul className="movie-list_item_options">
        <li onClick={showAddMovieModal}>Edit</li>
        <li onClick={showDeleteModal}>Delete</li>
    </ul>)
}

const MovieListItem = ({movie}) => {
    const [isShowOptions, toggleIsShowOptions] = useState(false);
    const toggleOptions = () => toggleIsShowOptions(!isShowOptions);
    const dispatch = useDispatch();
    const showDeleteModal = useCallback((e) => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('deleteModal', true))
    }, [movie.id, isShowOptions]);
    const showAddMovieModal = useCallback((e) => {
        toggleOptions();
        dispatch(setCurrentMovie({id: movie.id}))
        dispatch(toggleModal('addMovieModal', true));
    }, [movie.id, isShowOptions]);

    return (
        <div className="movie-list_item_wrap">
            <div className={!isShowOptions ? "movie-list_item_dots" : "movie-list_item_cross"} onClick={toggleOptions}>{isShowOptions ? '✖' : '...'}</div>
            {isShowOptions && <Options showDeleteModal={showDeleteModal} showAddMovieModal={showAddMovieModal}/>}
            <Link to={`/movie/${movie.id}`}  className="movie-list_item">
                <Image path={movie.poster_path} title={movie.title}/>
                <div className="movie-list_item_description">
                    <h2 className="movie-list_item_title">{movie.title}</h2>
                    <div className="movie-list_item_year">{getMovieYear(movie.release_date)}</div>
                    <div className="movie-list_item_genres">{getGenres(movie.genres)}</div>
                </div>
            </Link>
        </div>
    )
}

PropTypes.propTypes = {
    movie: PropTypes.object.isRequired
}

export {
    MovieListItem
}
