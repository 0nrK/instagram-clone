import React from 'react'
import Feed from '../components/Feed/Feed'
import Navbar from '../components/Navbar/Navbar'
import Post from '../components/Post/Post'
import Sidebar from '../components/Sidebar/Sidebar'
import StoriesBar from '../components/Stories/StoriesBar'
import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.mainLeft}>
                    <StoriesBar />
                    <Feed />
                </div>
                <div className={styles.mainRight}>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Home