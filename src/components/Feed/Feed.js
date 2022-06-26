import React, { useState } from 'react'
import Post from '../Post/Post'
import styles from './feed.module.css'
import { postData } from '../../data'

const Feed = () => {
    const [posts, setPosts] = useState(postData)
    return (
        <div className={styles.feed}>
            {posts.map((post) => <Post key={post.id} props={post} />)}

        </div>
    )
}

export default Feed