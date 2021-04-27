import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "@/store/actions";

export const InfoModal = ({children}) => {
    const dispatch = useDispatch();
    const modals = useSelector(state => state.modals);
    let currentModal = '';
    for (const [key, value] of Object.entries(modals)) {
        if(value) {
            currentModal = key;
            break;
        }
    }
    const hideModal = useCallback(() => dispatch(toggleModal(currentModal,false)), [currentModal]);

    return (
        <form>
            <div className="close" onClick={hideModal}>✖</div>
            {children}
        </form>
    )
}