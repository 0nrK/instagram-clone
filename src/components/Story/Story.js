import React from 'react'
import styles from './story.module.css'

const Story = () => {
    return (
        <div className={styles.userStory}>
            <img
                className={styles.userImg}
                src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"></img>
            <span>username</span>
        </div>
    )
}

export default Story