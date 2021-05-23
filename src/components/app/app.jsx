import 'isomorphic-fetch';
import { hot } from 'react-hot-loader';
import React from 'react';
import {useSelector} from "react-redux";
import {Switch, Route} from "react-router-dom";

import {Header} from "@/components/header";
import {Body} from "@/components/body";
import {Footer} from "@/components/footer";
import {Modal} from "@/components/modals";
import {MoviePage} from "@/components/movie-page";
import {Provider} from "react-redux";
import ErrorBoundary from "@/components/error-boundary/error-boundary";
import {NotFound} from "@/components/not-found";

import './app-style.sass';

const App = () => {
    const isShowModal = useSelector(state => Object.values(state.modals).some(el => el === true));

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Body />
                    <Footer />
                </Route>
                <Route exact path="/search/:search">
                    <Header/>
                    <Body />
                    <Footer />
                </Route>
                <Route exact path="/movie/:id">
                    <MoviePage/>
                    <Body />
                    <Footer />
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
            {isShowModal && <Modal/>}
        </>
    )
}

export const Root = hot(module)(({ Router, location, store }) => {
    return(
        <Provider store={store}>
            <ErrorBoundary>
                <Router location={location}>
                    <App/>
                </Router>
            </ErrorBoundary>
        </Provider>
    )
})