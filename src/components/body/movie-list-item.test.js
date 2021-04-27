import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MovieListItem} from './movie-list-item';
import { createMemoryHistory } from "history";
import {Provider} from "react-redux";
import {store} from "@/store/reducer";
import {Router} from "react-router-dom";
import movie from '@/__mocks__/movie.json';
import {Modal} from '@/components/modals'

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


describe('render Movie page', () => {

    it('render single movie', () => {
        const {getByAltText} = renderWithRedux(withRouter(<MovieListItem movie={movie}/>));
        const poster = getByAltText(/Zootopia/i);
        expect(poster).toBeInTheDocument();
    })

    it('click on edit button', async () => {
        const {getByText, findByText, findByDisplayValue} = renderWithRedux(withRouter( <>
                                                                                                    <Modal/>
                                                                                                    <MovieListItem movie={movie}/>
                                                                                               </>));
        userEvent.click(getByText('...'));
        const editButton = await findByText(/edit/i);
        userEvent.click(editButton);
        // const titleInput = await findByDisplayValue('/Zootopia/i');

        // expect(titleInput).toBeInTheDocument();

    })
})
