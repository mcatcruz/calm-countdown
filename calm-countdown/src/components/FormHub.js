import React from "react";
import styles from "../styles/HomeComponent.module.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';
import SeeForm from './SeeForm';

// FormHub holds the initial state of all the forms through useState.
const FormHub = ({}) => {

    return (
            <>
                <SeeForm formTitle="Five Things You See"/>
            </>

    )
}

export default FormHub;