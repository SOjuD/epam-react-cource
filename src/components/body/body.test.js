import React from 'react';
import {render} from '@testing-library/react';
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import {Body} from './index';
import {Provider} from "react-redux";
import {store} from "@/store/reducer";
import movies12 from '@/__mocks__/response12.json';

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

    beforeEach(() => {
        fetch.resetMocks();
    });

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
        fetch.mockResponseOnce(JSON.stringify(movies12));
        const {findAllByRole, getByText} = renderWithRedux(withRouter(<Body/>));
        const movies = await findAllByRole('link');
        const button = getByText(/show more/i);
        expect(movies).toHaveLength(12);
    })
})
