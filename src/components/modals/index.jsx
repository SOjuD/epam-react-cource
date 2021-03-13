import React from 'react';
import {useSelector} from "react-redux";
import './modals.sass'
import {AddMovieForm} from "@/components/modals/add-movie-form";

export const Modal = () => {
    const {addMovieModal, deleteModal} = useSelector(state => state.modals);
    return(
        <div className='modal'>
            {addMovieModal && <AddMovieForm/>}
            {deleteModal && <DeleteModal/>}
        </div>
    )
}