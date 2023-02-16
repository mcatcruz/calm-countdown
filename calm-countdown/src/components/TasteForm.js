import React from "react";
import styles from "../styles/HomeComponent.module.css";


const TasteForm = ({handleFormInputChange}) => {

    return (
        <>
            <h1 className={styles.title}>One Flavor You Taste</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_flavor">
                        <input name="first_flavor" className={styles.input} type="text" onChange={handleTasteFormInputChange}  placeholder="Mint"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}
export default TasteForm;