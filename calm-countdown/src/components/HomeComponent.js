import React from 'react';
import styles from '../styles/HomeComponent.module.css'
import FormHub from './FormHub';
import { useState } from 'react'; 

// This is the Home Page UI. 

function HomeComponent(){

    const [showFormHub, setFormHub] = useState(false);

    function renderFormHub(event) {
        setFormHub(true);
        console.log(event);

    }

    return (
        <>  
            <div className={styles.container}>
                {showFormHub ? <FormHub />: 
                    <> 
                        <h1 className={styles.title}>Meet Calm</h1>
                        <h3 className={styles.subtitle}>Engage your senses. Return to the present.</h3>
                        <button className={styles.startbtn} onClick={renderFormHub}>Start</button>
                    </>
                }
                
            </div>
            
        </>
    )

}

export default HomeComponent;