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


// 2/14 TODO: ADD A 'BACK' BUTTON


const FormHub = ({}) => {
    const [component, setComponent] = useState(0);

    const [seeFormInput, setSeeFormInput] = useState({
        firstSeeItem: '',
        secondSeeItem: '',
        thirdSeeItem: '',
        fourthSeeItem: '',
        fifthSeeItem: '',
    })

    const [touchFormInput, setTouchFormInput] = useState({
        firstTouchItem: '',
        secondTouchItem: '',
        thirdTouchItem: '',
        fourthTouchItem: '',
    })

    const [hearFormInput, setHearFormInput] = useState({
        firstSound: '',
        secondSound: '',
        thirdSound: '',
    })

    const [smellFormInput, setSmellFormInput] = useState({
        firstAroma: '',
        secondAroma: '',
    })

    const [tasteFormInput, setTasteFormInput] = useState({
        firstFlavor: '',
    })

    const [blankAlert, setBlankAlert] = useState('');

    // renderComponent will render a different component based on form value.
    const renderComponent = () => {
        const componentByNumericalOrder = {
            0: <HomeComponent />,
            1: <SeeForm seeFormInput={seeFormInput} handleSeeFormInputChange={handleSeeFormInputChange} />,
            2: <TouchForm touchFormInput={touchFormInput} handleTouchFormInputChange={handleTouchFormInputChange} />,
            3: <HearForm  hearFormInput={hearFormInput} handleHearFormInputChange={handleHearFormInputChange} />,
            4: <SmellForm  smellFormInput={smellFormInput} handleSmellFormInputChange={handleSmellFormInputChange} />,
            5: <TasteForm  tasteFormInput={tasteFormInput} handleTasteFormInputChange={handleTasteFormInputChange} />,
            6: <End />
        }
    
        return componentByNumericalOrder[component];
    }

    // handleButton will increment setComponent by one; this is triggered when Next button is clicked.
    // It will also check for any blank input fields before incrementing component.
    const handleButton= (event) => {
        if (component === 1) {
            for (const input of Object.values(seeFormInput)) {
                if (input.trim().length === 0) {
                    setBlankAlert('Field(s) empty. Kindly fix.');
                    return;
                } 
            }
            setBlankAlert('');
        } else if (component === 2) {
            for (const input of Object.values(touchFormInput)) {
                if (input.trim().length === 0) {
                    setBlankAlert('Field(s) empty. Kindly fix.');
                    return;
                } 
            }
            setBlankAlert('');
        } else if (component === 3) {
            for (const input of Object.values(hearFormInput)) {
                if (input.trim().length === 0) {
                    console.log(input)
                    setBlankAlert('Field(s) empty. Kindly fix.');
                    return;
                } 
            }
            setBlankAlert('');
        }  else if (component === 4) {
            for (const input of Object.values(smellFormInput)) {
                if (input.trim().length === 0) {
                    setBlankAlert('Field(s) empty. Kindly fix.');
                    return;
                } 
            }
            setBlankAlert('');
        }  else if (component === 5) {
            for (const input of Object.values(tasteFormInput)) {
                if (input.trim().length === 0) {
                    setBlankAlert('Field empty. Kindly fix.');
                    return;
                } 
            }
            setBlankAlert('');
        } 

        if (component >= 6) {
            setComponent(0);
        } else {
            setComponent(component + 1);
        }
    }

    //Updates the forms with user input
    const handleSeeFormInputChange = (event) => {
        const target = event.target;

        if (target.name == "first_see_item") {
            setSeeFormInput({
                ...seeFormInput,
                firstSeeItem: target.value
            })
        } else if (target.name == "second_see_item") {
            setSeeFormInput({
                ...seeFormInput,
                secondSeeItem: target.value
            })
        } else if (target.name == "third_see_item") {
            setSeeFormInput({
                ...seeFormInput,
                thirdSeeItem: target.value
            })
        } else if (target.name == "fourth_see_item") {
            setSeeFormInput({
                ...seeFormInput,
                fourthSeeItem: target.value
            })
        } else if (target.name == "fifth_see_item") {
            setSeeFormInput({
                ...seeFormInput,
                fifthSeeItem: target.value
            })
        }
    }

    const handleTouchFormInputChange = (event) => {
        const target = event.target;

        if (target.name == "first_touch_item") {
            setTouchFormInput({
                ...touchFormInput,
                firstTouchItem: target.value
            })
        } else if (target.name == "second_touch_item") {
            setTouchFormInput({
                ...touchFormInput,
                secondTouchItem: target.value
            })
        } else if (target.name == "third_touch_item") {
            setTouchFormInput({
                ...touchFormInput,
                thirdTouchItem: target.value
            })
        } else if (target.name == "fourth_touch_item") {
            setTouchFormInput({
                ...touchFormInput,
                fourthTouchItem: target.value
            })
        } 
    }

    const handleHearFormInputChange = (event) => {
        const target = event.target

        if (target.name == "first_sound") {
            setHearFormInput({
                ...hearFormInput,
                firstSound: target.value
            })
        } else if (target.name == "second_sound") {
            setHearFormInput({
                ...hearFormInput,
                secondSound: target.value
            })
        } else if (target.name == "third_sound") {
            setHearFormInput({
                ...hearFormInput,
                thirdSound: target.value
            })
        }
    }

    const handleSmellFormInputChange = (event) => {
        const target = event.target

        if (target.name == "first_aroma") {
            setSmellFormInput({
                ...smellFormInput,
                firstAroma: target.value
            })
        } else if (target.name == "second_aroma") {
            setSmellFormInput({
                ...smellFormInput,
                secondAroma: target.value
            })
        }
    }

    const handleTasteFormInputChange = (event) => {
        const target = event.target
        
        if (target.name == 'first_flavor') {
            setTasteFormInput({
                firstFlavor: target.value
            })
        }
    }

    return (
            <div className={styles.container}>
                {renderComponent()}
                <span className={styles.span}>{blankAlert}</span>
                <button className={styles.nextbtn} onClick={handleButton}> 
                    { component === 0 ? "Start" 
                    : component >= 6 ? "Restart" 
                    : "Next" }
                </button>
            </div>

    )
}

export default FormHub;