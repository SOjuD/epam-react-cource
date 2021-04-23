import React from 'react';
import "@babel/polyfill";
import {render} from '@testing-library/react';
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event';
import {Router} from "react-router-dom";
import '@testing-library/jest-dom';
import {Body} from './index';
import {Provider} from "react-redux";
import {store} from "@/store/reducer";

global.fetch = require("node-fetch");

const renderWithRedux = (component) => render(<Provider store={store}>{component}</Provider>);
const withRouter = (component, route = "/") => {
    const history = createMemoryHistory();
    history.push(route)
    return(
      <Router history={history}>
          {component}
      </Router>
    );
};

describe('render body', () => {
    it('should have no movies', () => {
        const {getByText} = renderWithRedux(withRouter(<Body/>));
        const NotFoundTitle = getByText(/no movie found/i)
        expect(NotFoundTitle).toBeInTheDocument();
    })

    it('should work "show more" button', () => {
        const {getByText} = renderWithRedux(withRouter(<Body/>));
        const button = getByText(/show more/i);
        expect(button).toBeInTheDocument();
    })

    it('successful fetch movies', async () => {
        const {findAllByRole, getByText} = renderWithRedux(withRouter(<Body/>));
        const movies = await findAllByRole('link');
        const button = getByText(/show more/i);
        expect(movies).toHaveLength(12);
        await userEvent.click(button);
        const moreMovies = await findAllByRole('link');
        expect(moreMovies).toHaveLength(24);
    })
})
