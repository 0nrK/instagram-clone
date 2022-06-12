import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './addpostmodal.module.css'


const Modal = ({ isOpened, children, onClose }) => {

    if (!isOpened) {
        return null;
    }

    return createPortal(

        <div className={styles.modal}>
            <div onClick={onClose} className={styles.modalBackground}></div>
            <div className={styles.modalWrapper}>
                <span className={styles.closeModalBtn} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <div className={styles.modalContent}>
                    <div className={styles.modalBox}>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}



export default Modal;