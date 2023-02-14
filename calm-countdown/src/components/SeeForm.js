import React from "react";
import styles from "../styles/HomeComponent.module.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';

const SeeForm = ({formTitle}) => {
    return (
        <>
            <h1 className={styles.title}>{formTitle}</h1>
        </>
    )
}

export default SeeForm;