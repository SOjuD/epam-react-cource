import React from "react";
import logoImg from '@/assets/img/logo.svg';

export const Logo = () => {
    return(
        <div className="logo">
            <img src={logoImg} alt="logo"/>
        </div>
    )
}