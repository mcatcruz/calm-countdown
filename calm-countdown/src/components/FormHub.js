import React from "react";
import styles from "../styles/HomeComponent.module.css";
import { useState } from 'react';
import SeeForm from './SeeForm';
import TouchForm from './TouchForm'

// FormHub holds the initial state of all the forms through useState.
// This will handle most of the forms' logic.

// 2/14 TODO: ADD A 'BACK' BUTTON
const FormHub = ({}) => {
    const [form, setForm] = useState(0);
    const [formInput, setFormInput] = useState({
        firstItem: '',
        secondItem: '',
        thirdItem: '',
        fourthItem: '',
        fifthItem: ''
    })

    // getForm will render a different component based on form value.
    const getForm = () => {
        const formTypesByNumericalOrder = {
            0: <SeeForm formData={formInput} setFormData={setFormInput} />,
            1: <TouchForm formData={formInput} setFormData={setFormInput}/>,
        }
        return Object.keys(formTypesByNumericalOrder)[form];
    }

    function handleNext (event) {
        setForm(form + 1);
        console.log(event);
    }

    return (
            <div className={styles.formcontainer}>
                <h1 formTitle="Five Things You See"></h1>
                {getForm()}
                
                <button className={styles.nextbtn} onClick={handleNext}> {form == 0 || form == 4 ? "Next": "Restart" }
                
                </button>
            </div>

    )
}

export default FormHub;