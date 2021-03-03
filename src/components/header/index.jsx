import React from "react";

import {TopLine} from "@/components/header/top-line";
import {FindMovie} from "@/components/header/find-movie";
import headerBgImage from "@/assets/img/header_bg.jpg";
import './header-style.sass';


export const Header = () => {
    return(
        <header className="mainHeader" style={{backgroundImage: `url(${headerBgImage})`}}>
            <div className="container">
                <TopLine />
                <FindMovie />
            </div>
        </header>
    )
}