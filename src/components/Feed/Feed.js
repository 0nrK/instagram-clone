import React from 'react'
import Post from '../Post/Post'
import styles from './feed.module.css'

const Feed = () => {
    return (
        <div className={styles.feed}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed