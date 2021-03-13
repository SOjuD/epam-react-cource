import React from 'react';
import {useSelector} from "react-redux";
import {Header} from "@/components/header";
import {Body} from "@/components/body";
import {Footer} from "@/components/footer";
import {Modal} from "@/components/modals";

import './app-style.sass';

export const App = () => {
    const isShowModal = useSelector(state => Object.values(state.modals).some(el => el === true));

    return (
        <React.Fragment>
            {isShowModal && <Modal/>}
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}