import React from 'react'
import styles from './story.module.css'

const Story = () => {
    return (
        <div className={styles.userStory}>
            <div className={styles.imgWrapper}>

                <img
                    className={styles.userImg}
                    src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"></img>
            </div>
            <span>username</span>
        </div>
    )
}

export default Story