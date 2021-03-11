import React from 'react';
import {useSelector} from "react-redux";
import {Header} from "@/components/header";
import {Body} from "@/components/body";
import {Footer} from "@/components/footer";
import {AddMovie} from "@/components/add-movie-block";

import './app-style.sass';

export const App = () => {
    const isShowAddMovie = useSelector(state => state.isShowAddMovie);

    return (
        <React.Fragment>
            {isShowAddMovie && <AddMovie/>}
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}