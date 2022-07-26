import React, { useContext, useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineCompass } from 'react-icons/ai'
import { MdHomeFilled } from 'react-icons/md'
import { BsPlusSquare } from 'react-icons/bs'
import { RiSendPlaneLine, RiWindowLine } from 'react-icons/ri'
import { TbSend } from 'react-icons/tb'
import Modal from '../AddPostModal/AddPostModal'


const Navbar = () => {

    const [isModalOpened, setIsModalOpened] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden'
        console.log(document.body.style);
    }, [isModalOpened])

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.wrapper}>
                    <div>
                        <img className={styles.logo} src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
                            alt='instagram' />
                    </div>
                    <div className={styles.center}>
                        <AiOutlineSearch className={styles.searchicon} />
                        <input className={styles.searchbar} placeholder="Search" name='searchbar' type='text' />
                    </div>
                    <div className={styles.right}>
                        <MdHomeFilled className={styles.icon} />
                        <TbSend className={styles.icon} />
                        <BsPlusSquare onClick={() => setIsModalOpened(true)} className={styles.icon} />
                        <AiOutlineCompass className={styles.icon} />
                        <AiOutlineHeart className={styles.icon} />
                        <img
                            className={styles.userpp}
                            src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"
                            alt='userpp' />
                    </div>
                </div>
            </nav>
            {isModalOpened &&
                <Modal
                    isOpened={isModalOpened}
                    onClose={() => setIsModalOpened(false)} />
            }
        </>
    )
}
export default Navbar