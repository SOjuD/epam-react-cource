import React from 'react';
import {Header} from "@/components/header";
import {Body} from "@/components/body";
import {Footer} from "@/components/footer";

import './app-style.sass';

export const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}