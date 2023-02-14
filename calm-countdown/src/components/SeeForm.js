import React from "react";
import styles from "../styles/HomeComponent.module.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';

const SeeForm = (props) => {
    <>
        <h1 className={styles.title} name={props.name}></h1>
    </>
}

export default SeeForm;