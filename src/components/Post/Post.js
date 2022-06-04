import React from 'react'
import styles from './post.module.css'
import { BsBookmark, BsChatSquareQuote, BsHeart, BsThreeDots } from 'react-icons/bs'
import { TbSend } from 'react-icons/tb'
import { AiOutlineSmile } from 'react-icons/ai'
const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postHeaderLeft}>
                    <img
                        className={styles.userImg}
                        src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"
                        alt='userimg' />
                    <span className={styles.username}>Username</span>
                </div>
                <BsThreeDots className={styles.dotIcon} />
            </div>
            <div>
                <img
                    className={styles.postImg}
                    src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
                    alt='postimg' />
            </div>
            <div className={styles.postBottom}>
                <div className={styles.icons}>
                    <div className={styles.iconsLeft}>
                        <BsHeart className={styles.icon} />
                        <BsChatSquareQuote className={styles.icon} />
                        <TbSend className={styles.icon} />
                    </div>
                    <div className={styles.iconsRight}>
                        <BsBookmark className={styles.icon} />
                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <span className={styles.username}>Username</span>
                    <span className={styles.desc}>LoremId officia amet occaecat reprehenderit. Qui consectetur eu aute laborum dolore. Proident nulla exercitation qui velit incididunt aute consectetur qui commodo laborum in...</span>
                </div>
                <span className={styles.timestamp}>3 HOURS AGO</span>
                <div className={styles.commentInput}>
                    <AiOutlineSmile />
                    <input type='text' placeholder='Add a comment...'></input>
                    <span className={styles.postBtn}>Post</span>
                </div>
            </div>
        </div>
    )
}

export default Post