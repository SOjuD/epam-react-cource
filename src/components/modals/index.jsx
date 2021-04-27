import React from 'react';
import {useSelector} from "react-redux";
import './modals.sass'
import {AddMovieForm} from "@/components/modals/add-movie-form";
import {DeleteModal} from "@/components/modals/delete-modal";
import {InfoModal} from "@/components/modals/info-modal";

export const Modal = () => {
    const {addMovieModal, deleteModal, successModal, failedModal} = useSelector(state => state.modals);

    return(
        <div className='modal'>
            {addMovieModal && <AddMovieForm/>}
            {deleteModal && <DeleteModal/>}
            {successModal && <InfoModal>
                <h4>Success</h4>
                <p>All were completed success</p>
            </InfoModal>}
            {failedModal && <InfoModal>
                <h4>Failed!</h4>
                <p>Something went wrong</p>
            </InfoModal>}
        </div>
    )
}