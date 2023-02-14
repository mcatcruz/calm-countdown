import React from "react";
import styles from "../styles/HomeComponent.module.css";
import { useState } from 'react';
import SeeForm from './SeeForm';
import TouchForm from './TouchForm';
// import HearForm from './HearForm';
// import SmellForm from './SmellForm';
// import TasteForm from './TasteForm';

// FormHub holds the initial state of all the forms through useState.
// This will handle most of the forms' logic.

// 2/14 TODO: ADD A 'BACK' BUTTON
// 2/14 TODO: GETFORM() IS RENDERING A NUMBER -- HOW TO DELETE THIS?
const FormHub = ({}) => {
    const [form, setForm] = useState(0);

    const [formInput, setFormInput] = useState({
        firstItem: '',
        secondItem: '',
        thirdItem: '',
        fourthItem: '',
        fifthItem: '',
    })

    // getForm will render a different component based on form value.
    const getForm = () => {

        const formTypesByNumericalOrder = {
            0: <SeeForm formData={formInput} setFormData={setFormInput} />,
            1: <TouchForm formData={formInput} setFormData={setFormInput}/>,
            // 2: <HearForm formData={formInput} setFormData={setFormInput}/>,
            // 3: <SmellForm formData={formInput} setFormData={setFormInput} />,
            // 4: <TasteForm formData={formInput} setFormData={setFormInput} />,
        }

        return Object.keys(formTypesByNumericalOrder)[form];
    }

    function handleNext (event) {
        if (form >= 4) {
            setForm(0);
        } else {
            setForm(form + 1);
            console.log('hi')
        }
    }

    return (
            <div className={styles.formcontainer}>
                {getForm()}
                
                <button className={styles.nextbtn} onClick={handleNext}> {form === 4 ? "Restart" : "Next" }
                
                </button>
            </div>

    )
}

export default FormHub;