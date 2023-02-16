import React, {useState} from "react";
import styles from "../styles/HomeComponent.module.css";
import SeeForm from './SeeForm';
import TouchForm from './TouchForm';
import HearForm from './HearForm';
import SmellForm from './SmellForm';
import TasteForm from './TasteForm';
import End from "./End";
import HomeComponent from "./HomeComponent";

// FormHub holds the initial state of all the forms through useState.
// This will handle most of the forms' logic.

// 2/14 TODO: ADD A 'BACK' BUTTON
// 2/15 TODO (FOR ALL FORMS): ERROR HANDLING

const FormHub = ({}) => {
    const [component, setComponent] = useState(0);

    const [formInput, setFormInput] = useState({
        firstItem: '',
        secondItem: '',
        thirdItem: '',
        fourthItem: '',
        fifthItem: '',
    })

    const [blankAlert, setBlankAlert] = useState('');

    const handleBlankItem = () => {
        for (const input of Object.values(formInput)) {
            if (input.trim().length > 0) {
                setBlankAlert('');
            } else {
                setBlankAlert('Field(s) empty. Kindly fix.')
            }
        }
    }

    // renderComponent will render a different component based on form value.
    const renderComponent = () => {

        const componentByNumericalOrder = {
            0: <HomeComponent />,
            1: <SeeForm formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            2: <TouchForm formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            3: <HearForm  formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            4: <SmellForm  formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            5: <TasteForm  formInput={formInput} handleFormInputChange={handleFormInputChange} />,
            6: <End />
        }

        return componentByNumericalOrder[component];
    }

    // handleButton will increment setComponent by one; this is triggered when Next button is clicked.
    const handleButton= (event) => {
        if (component >= 6) {
            setComponent(0);
        } else {
            setComponent(component + 1);
        }
        if (component !== 0 || component === 6) {
            handleBlankItem();
        }
        
    }

    // handledFormInputChange updates the forms with user input
    const handleFormInputChange = (event) => {
        const target = event.target;
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
            <div className={styles.container}>
                {renderComponent()}
                <span className={styles.span}>{blankAlert}</span>
                <button className={styles.nextbtn} onClick={handleButton} disabled={blankAlert}> 
                    { component === 0 ? "Start" 
                    : component >= 6 ? "Restart" 
                    : "Next" }
                </button>
            </div>

    )
}

export default FormHub;