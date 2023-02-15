import React from 'react';
import styles from '../styles/HomeComponent.module.css'
import { useState } from 'react'; 
import HomeComponent from './HomeComponent';

// This is the Home Page UI. 

function EndComponent(){

    const [showHome, setHome] = useState(false);

    function renderHome(event) {
        setHome(true);
        console.log(event);

    }

    return (
        <>  
            <div className={styles.container}>
                {setHome ? <HomeComponent /> : 
                    <> 
                        <h1 className={styles.title}>Fin</h1>
                        <h3 className={styles.subtitle}>Take a deep breath. Enjoy your day.</h3>
                        <button className={styles.startbtn} onClick={renderHome}></button>
                    </>
                }
                
            </div>
            
        </>
    )

}

export default EndComponent;