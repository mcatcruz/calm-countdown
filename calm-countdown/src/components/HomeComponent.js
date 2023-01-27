import React from 'react';
import styles from '../styles/HomeComponent.module.css'

// This is the Home Page UI. 

function HomeComponent(){
    return (
        <>  
            <div className={styles.container}>
                <h1 className={styles.title}>Meet Calm</h1>
                <h3 className={styles.subtitle}>Engage your senses. Return to the present.</h3>
            </div>
        </>
    )
}

export default HomeComponent;