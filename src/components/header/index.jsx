import React from "react";

import {TopLine} from "@/components/header/top-line";
import {FindMovie} from "@/components/header/find-movie";
import './header-style.sass';


export const Header = () => {
    return(
        <header className="mainHeader">
            <div className="container">
                <TopLine />
                <FindMovie />
            </div>
        </header>
    )
}