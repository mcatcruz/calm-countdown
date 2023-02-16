import React from "react";
import styles from "../styles/HomeComponent.module.css";

const HearForm = ({ handleFormInputChange }) => {

    return (
        <>
            <h1 className={styles.title}>Three Sounds You Hear</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_sound">
                        <input name="first_sound" className={styles.input} type="text" onChange={handleFormInputChange}  placeholder="Keyboard Clacking"></input>
                    </label>
                    <label htmlFor="second_sound">
                        <input name="second_sound" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Mouse Clicks"></input>
                    </label>
                    <label htmlFor="third_sound">
                        <input name="third_sound" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Lofi Beats"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}

export default HearForm;