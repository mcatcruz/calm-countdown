import React from 'react';
import styles from '../styles/HomeComponent.module.css'

function button(props) {
    return (
        <button className={styles.startbtn}>{props.buttonName}</button>
    )
}
export default button;