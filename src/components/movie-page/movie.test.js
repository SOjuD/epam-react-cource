import React from 'react';
import "@babel/polyfill";
import {render, findByRole} from '@testing-library/react';
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import '@testing-library/jest-dom';
import {MoviePage} from './index';
import {Provider} from "react-redux";
import {store} from "@/store/reducer";
import movie from '@/__mocks__/movie.json';

const renderWithRedux = (component) => render(<Provider store={store}>{component}</Provider>);
const withRouter = (component, route = "/movie/269149") => {
    const history = createMemoryHistory();
    history.push(route)
    return(
      <Router history={history}>
          {component}
      </Router>
    );
};

describe('render Movie page', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('render single movie', async () => {
        window.scrollTo = jest.fn();
        fetch.mockResponseOnce(JSON.stringify(movie));
        const {findByAltText, findByRole} = renderWithRedux(withRouter(<MoviePage/>));
        const poster = await findByAltText(/Zootopia/i);
        const title = await findByRole('heading');
        expect(poster).toBeInTheDocument();
        expect(title).toHaveTextContent(/zootopia/i);
    })
})
