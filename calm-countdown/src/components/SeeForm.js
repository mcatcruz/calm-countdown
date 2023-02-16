import React from "react";
import styles from "../styles/HomeComponent.module.css";

const SeeForm = ({ handleFormInputChange }) => {

    return (
        <>
            <h1 className={styles.title}>Five Sights You See</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_seen_item">
                        <input name="first_seen_item" className={styles.input} type="text" onChange={handleSeeFormInputChange} placeholder="Desk">
                        </input>
                    </label>
                    <label htmlFor="second_seen_item">
                        <input name="second_seen_item" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Keyboard"></input>
                    </label>
                    <label htmlFor="third_seen_item">
                        <input name="third_seen_item" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Phone"></input>
                    </label>
                    <label htmlFor="fourth_seen_item">
                        <input name="fourth_seen_item" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Window"></input>
                    </label>
                    <label htmlFor="fifth_seen_item">
                        <input name="fifth_seen_item" className={styles.input}  type="text" onChange={handleFormInputChange} placeholder="Coffee Mug"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}

export default SeeForm;