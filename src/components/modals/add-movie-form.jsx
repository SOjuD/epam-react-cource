import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormikContext, Formik, Form, Field} from 'formik';
import DatePicker from "react-datepicker";
import {toggleModal} from "@/store/actions";
// import "react-datepicker/dist/react-datepicker.css";
import {api} from '@/api';


const MyForm = ({availableFilter, hideAddMovie}) => {
    const {values, setFieldValue, errors, isValid} = useFormikContext();
    const validateUrl = (value) => {
        if(!value) return 'required value';
        if(!value.match(/^https?:\/\//)) return 'value need to be link';
    };
    const validateRating = (value) => {
        if(value < 0 || value > 10) return 'incorrect rating value'
    }
    const validateValue = (value) => value ? undefined : 'required value';
    return <Form className="add-movie-form">
        <div className="close" onClick={hideAddMovie}>✖</div>
        <h4>Add Movie</h4>
        <label>
            <span>{errors.title || 'Title'}</span>
            <Field type="text"
                   placeholder="please type title here"
                   name="title"
                   validate={validateValue}/>
        </label>
        <label>
            <span>{errors.release_date || 'Release date'}</span>
            <DatePicker
                selected={values.release_date}
                name="date"
                dateFormat="MMMM d, yyyy"
                onChange={date => setFieldValue('release_date', date)}
                validate={validateValue}/>
        </label>
        <label>
            <span>{errors.poster_path || 'Poster URL'}</span>
            <Field type="text"
                   placeholder="please type url here"
                   name="poster_path"
                   validate={validateUrl}/>
        </label>
        <label>
            <span>{errors.genre || 'Genre'}</span>
            <Field
                as='select'
                name="genres"
                multiple={true}
                size={3}
                data-testid='genre'
                validate={validateValue}>
                {availableFilter.map(el => <option key={el} value={el}>{el}</option>)}
            </Field>
        </label>
        <label>
            <span>{errors.overview || 'Overview'}</span>
            <Field type='textarea'
                   placeholder="please type overview here"
                   name="overview"
                   validate={validateValue}/>
        </label>
        <label>
            <span>{errors.runtime || 'Runtime'}</span>
            <Field type="number"
                   placeholder="please type runtime here"
                   name="runtime"
                   data-testid="runtime"/>
        </label>
        <label>
            <span>{errors.vote_average || 'Rating'}</span>
            <Field type="number"
                   placeholder="please type rating here"
                   name="vote_average"
                   validate={validateRating}
                   data-testid="vote_average"/>
        </label>

        <div className="buttons">
            <button type="reset">Reset</button>
            <button type="submit" disabled={!isValid}>Submit</button>
        </div>
    </Form>
}

export const AddMovieForm = () => {
    const dispatch = useDispatch();
    const {currentMovie, availableFilter} = useSelector(state => state);
    currentMovie.release_date = new Date(currentMovie.release_date);
    const hideAddMovie = useCallback(() => dispatch(toggleModal('addMovieModal',false)), []);
    const showSuccessModal = useCallback(() => dispatch(toggleModal('successModal',true)), []);
    const showFailedModal = useCallback(() => dispatch(toggleModal('failedModal',true)), []);
    const addMovie = useCallback((values) => {
        if(currentMovie.id) values.id = currentMovie.id;
        else delete values.id;
        const request = values.id ? api.updateMovie : api.addMovie;
        request(values).finally(() => {
            hideAddMovie();
        }).then(res => {
            showSuccessModal();
        }).catch(e => {
            showFailedModal();
            console.error(e)
        })
    },[currentMovie.id]);

    return (
        <Formik initialValues={currentMovie} onSubmit={addMovie}>
            <MyForm availableFilter={availableFilter} hideAddMovie={hideAddMovie}/>
        </Formik>
    )
}

