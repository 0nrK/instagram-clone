import React from 'react'
import styles from './comment.module.css'

const Comment = () => {
    return (
        <div className={styles.comment}>
            <span className={styles.username}>username</span>
            <div className={styles.textWrapper}>
                <span className={styles.text}>
                    <span className={styles.replyTo}>@username2</span>
                    not sure, this is just a reverse psychology tactic haha yes im sure haha
                </span>
            </div>
        </div>
    )
}

export default Comment