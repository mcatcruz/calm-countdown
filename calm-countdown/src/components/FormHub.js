import React, {useState, useRef} from "react";
import styles from "../styles/HomeComponent.module.css";
import SeeForm from './SeeForm';
import TouchForm from './TouchForm';

// import HearForm from './HearForm';
// import SmellForm from './SmellForm';
// import TasteForm from './TasteForm';

// FormHub holds the initial state of all the forms through useState.
// This will handle most of the forms' logic.

// 2/14 TODO: ADD A 'BACK' BUTTON
// 2/14 TODO: RESTART BUTTON GOES TO HOMECOMPONENT
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
            0: <SeeForm formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            1: <TouchForm formInput={formInput} handleFormInputChange={handleFormInputChange}/>,
            // 2: <HearForm  formInput={formInput} handleFormInputChange={setForm}/>,
            // 3: <SmellForm  formInput={formInput} handleFormInputChange={setForm} />,
            // 4: <TasteForm  formInput={formInput} handleFormInputChange={setForm} />,
        }

        return formTypesByNumericalOrder[form];
    }

    const handleNext = (event) => {
        if (form >= 4) {
            setForm(0);
        } else {
            setForm(form + 1);
            console.log('hi')
        }
    }

    const handleFormInputChange = (event) => {
        const target = event.target
        if (target.name == "first") {
            setFormInput({
                ...formInput,
                firstItem: target.value
            })
        } else if (target.name == "second") {
            setFormInput({
                ...formInput,
                secondItem: target.value
            })
        } else if (target.name == "third") {
            setFormInput({
                ...formInput,
                thirdItem: target.value
            })
        } else if (target.name == "fourth") {
            setFormInput({
                ...formInput,
                fourthItem: target.value
            })
        } else if (target.name == "fifth") {
            setFormInput({
                ...formInput,
                fifthItem: target.value
            })
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