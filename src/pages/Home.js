import React from 'react'
import Feed from '../components/Feed/Feed'
import Navbar from '../components/Navbar/Navbar'
import Post from '../components/Post/Post'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './home.module.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <Feed />
                <Sidebar />
            </div>
        </div>
    )
}

export default Home