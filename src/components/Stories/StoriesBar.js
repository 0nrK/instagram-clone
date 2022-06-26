import React, { useRef, useState } from 'react'
import Story from '../Story/Story'
import styles from './storiesbar.module.css'
import { Users } from '../../data.js'

const StoriesBar = () => {

    const [users, setUsers] = useState(Users)


    return (
        <div className={styles.storiesBar}>
            {users.map((user) => <Story key={user.id} props={user} />)}
        </div>
    )
}

export default StoriesBar