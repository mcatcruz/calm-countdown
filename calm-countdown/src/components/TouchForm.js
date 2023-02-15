import React from "react";
import styles from "../styles/HomeComponent.module.css";


const TouchForm = ({handleFormInputChange}) => {

    return (
        <>
            <h1 className={styles.title}>Four Items You Touch</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_touched_item">
                        <input name="first" className={styles.input} type="text" onChange={handleFormInputChange}  placeholder="Headphones"></input>
                    </label>
                    <label htmlFor="second_touched_item">
                        <input name="second" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Chair"></input>
                    </label>
                    <label htmlFor="third_touched_item">
                        <input name="third" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Keyboard"></input>
                    </label>
                    <label htmlFor="fourth_touched_item">
                        <input name="fourth" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Ground"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}
export default TouchForm;