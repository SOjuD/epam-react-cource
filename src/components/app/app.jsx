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
import {NotFound} from "@/components/not-found";

export const App = () => {
    const isShowModal = useSelector(state => Object.values(state.modals).some(el => el === true));

    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/search/:search"]}>
                    <Header/>
                    <Body />
                    <Footer />
                </Route>
                <Route path="/movie/:id">
                    <MoviePage/>
                    <Body />
                    <Footer />
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
            {isShowModal && <Modal/>}
        </Router>
    )
}