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
                <span onClick={onClose}>
                    <svg className={styles.closeModalBtn} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <div className={styles.modalContent}>
                    <div className={styles.modalBox}>
                        <div className={styles.modalHeader}>
                            <h3>Create new post</h3>
                        </div>
                        <div className={styles.modalBoxBottom}>
                            <p>Drag photos and videos here</p>
                            <button>Select from computer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}



export default Modal;