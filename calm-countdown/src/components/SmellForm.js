import React from "react";
import styles from "../styles/HomeComponent.module.css";

const SmellForm = ({ handleFormInputChange }) => {

    return (
        <>
            <h1 className={styles.title}>Two Aromas You Smell</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_aroma">
                        <input name="first_aroma" className={styles.input} type="text" onChange={handleSmellFormInputChange}  placeholder="Coffee"></input>
                    </label>
                    <label htmlFor="second_aroma">
                        <input name="second_aroma" className={styles.input}  type="text" onChange={handleSmellFormInputChange} placeholder="Scented Candle"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}

export default SmellForm;