import React from 'react'
import styles from './sidebar.module.css'
import { suggestions } from '../../data'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <div className={styles.userLeft}>
                    <img
                        className={styles.userImg}
                        src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"
                        alt='userimg' />
                    <span>Username</span>
                </div>
                <span className={styles.blueColor}>Switch</span>
            </div >
            <h3 className={styles.header}>
                Suggestions For You
            </h3>
            {suggestions.map((person) => {
                return (
                    <div className={styles.sugUser}>
                        <div className={styles.sugLeft}>
                            <img
                                className={styles.sugUserImg}
                                src={person.profilePicture}
                                alt='userimg' />
                            <span>{person.username}</span>
                        </div>
                        <span className={styles.blueColor}>Follow</span>
                    </div>
                )
            })}

        </div >
    )
}

export default Sidebar