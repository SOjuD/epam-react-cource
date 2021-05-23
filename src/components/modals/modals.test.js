import React from 'react';
import {render} from '@testing-library/react';
import { createStore } from "redux";
import {Modal} from './index';
import * as ReactRedux from 'react-redux';
import {reducer} from "@/store/reducer";
import {initialState} from "@/store/initial-state";
import userEvent from '@testing-library/user-event';
import movie from '@/__mocks__/movie.json';

initialState.modals.addMovieModal = true;

const renderWithRedux = (component) => render(<ReactRedux.Provider store={createStore(reducer, initialState)}>{component}</ReactRedux.Provider>);

describe('render body', () => {

    const mockDispatch = jest.fn();

    beforeEach(() => {
        fetch.resetMocks();
        ReactRedux.useDispatch = jest.fn(mockDispatch);
    });


    it('successful add new movie', async () => {
        const {getByLabelText, getByDisplayValue, getByText, getByTestId} = renderWithRedux(<Modal/>);
        userEvent.type(getByLabelText(/title/i), movie.title)
        userEvent.type(getByDisplayValue(/2021/i), movie.release_date)
        userEvent.type(getByLabelText(/url/i), movie.poster_path)
        userEvent.selectOptions(getByTestId('genre'), movie.genres)
        userEvent.type(getByLabelText(/overview/i), movie.overview)
        userEvent.type(getByLabelText(/overview/i), movie.overview)
        userEvent.type(getByTestId('runtime'), movie.runtime)
        userEvent.type(getByTestId('vote_average'), movie.vote_average)
        userEvent.click(getByText(/submit/i));

        expect(mockDispatch).toHaveBeenCalled();
    })
})
