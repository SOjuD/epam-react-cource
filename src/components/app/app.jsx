import React from 'react';
import {useSelector} from "react-redux";
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom";
import {Header} from "@/components/header";
import {Body} from "@/components/body";
import {Footer} from "@/components/footer";
import {Modal} from "@/components/modals";
import {MoviePage} from "@/components/movie-page";

import './app-style.sass';

export const App = () => {
    const isShowModal = useSelector(state => Object.values(state.modals).some(el => el === true));

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header/>
                </Route>
                <Route path="/movie/:id">
                    <MoviePage/>
                </Route>
            </Switch>
            <Body />
            <Footer />
            {isShowModal && <Modal/>}
        </Router>
    )
}