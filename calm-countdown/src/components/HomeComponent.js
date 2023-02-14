import React from 'react';
import styles from '../styles/HomeComponent.module.css'
import FormHub from './FormHub';
import SeeForm from './SeeForm';
import { useState } from 'react'; 
import { render } from 'react-dom';

// This is the Home Page UI. 

function HomeComponent(){

    const [showFormHub, setFormHub] = useState(false);

    function renderFormHub(event) {
        setFormHub(true);
        console.log(event)
    }

    return (
        <>  
            <div className={styles.container}>
                <h1 className={styles.title}>Meet Calm</h1>
                <h3 className={styles.subtitle}>Engage your senses. Return to the present.</h3>
                <button className={styles.startbtn} onClick={renderFormHub}> Start</button>

                {showFormHub ? <FormHub /> : console.log('nope')}
                
            </div>
            
        </>
    )
}

export default HomeComponent;