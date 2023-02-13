import React from 'react';
import styles from '../styles/HomeComponent.module.css'
import Button from './Button';

// This is the Home Page UI. 

function HomeComponent(props){
    return (
        <>  
            <div className={styles.container}>
                <h1 className={styles.title}>Meet Calm</h1>
                <h3 className={styles.subtitle}>Engage your senses. Return to the present.</h3>
                <Button buttonName = "Start"/>
            </div>
            
        </>
    )
}

export default HomeComponent;