import React from 'react'
import styles from './story.module.css'

const Story = ({ props }) => {
    console.log('props', props);
    return (
        <div className={styles.userStory}>
            <div className={styles.imgWrapper}>

                <img
                    className={styles.userImg}
                    src={props.profilePicture}></img>
            </div>
            <span>{props.username}</span>
        </div>
    )
}

export default Story