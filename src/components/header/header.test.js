import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Header} from './index';
import {Provider} from "react-redux";
import {store} from "@/store/reducer";

const renderWithRedux = (component) => render(<Provider store={store}>{component}</Provider> );

describe("testing header", () => {
    
    it('should contain add movie button', () => {
        const {getByText} = renderWithRedux(<Header />);
        const button = getByText(/add movie/i);
        expect(button).toBeInTheDocument();
    })
    it('should contain search field', () => {
        const searchValue = 'John Wick';
        const {getByPlaceholderText} = renderWithRedux(<Header />);
        const searchField = getByPlaceholderText(/What do wou want to watch/i);
        userEvent.type(searchField, searchValue);
        expect(searchField).toHaveValue(searchValue);
    })
});