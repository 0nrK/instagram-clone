import React from 'react'
import styles from './post.module.css'
import { BsBookmark, BsChatSquareQuote, BsHeart, BsThreeDots } from 'react-icons/bs'
import { TbSend } from 'react-icons/tb'
import { AiOutlineSmile } from 'react-icons/ai'
import Comment from '../Comment/Comment'
const Post = ({ props }) => {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postHeaderLeft}>
                    <img
                        className={styles.userImg}
                        src={props.profilePicture}
                        alt='userimg' />
                    <span className={styles.username}>{props.username}</span>
                </div>
                <BsThreeDots className={styles.dotIcon} />
            </div>
            <div>
                <img
                    className={styles.postImg}
                    src={props.postImg}
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
                    <span className={styles.username}>{props.username}</span>
                    <span className={styles.desc}>{props.postDesc}</span>
                </div>
                <span className={styles.timestamp}>3 HOURS AGO</span>
                <Comment />
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