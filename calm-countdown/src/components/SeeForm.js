import React from "react";
import styles from "../styles/HomeComponent.module.css";

const SeeForm = ({ handleSeeFormInputChange }) => {

    return (
        <>
            <h1 className={styles.title}>Five Sights You See</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_see_item">
                        <input name="first_see_item" className={styles.input} type="text" onChange={handleSeeFormInputChange} placeholder="Desk">
                        </input>
                    </label>
                    <label htmlFor="second_see_item">
                        <input name="second_see_item" className={styles.input}  type="text" onChange={handleSeeFormInputChange} placeholder="Keyboard"></input>
                    </label>
                    <label htmlFor="third_see_item">
                        <input name="third_see_item" className={styles.input}  type="text" onChange={handleSeeFormInputChange} placeholder="Phone"></input>
                    </label>
                    <label htmlFor="fourth_see_item">
                        <input name="fourth_see_item" className={styles.input}  type="text" onChange={handleSeeFormInputChange} placeholder="Window"></input>
                    </label>
                    <label htmlFor="fifth_see_item">
                        <input name="fifth_see_item" className={styles.input}  type="text" onChange={handleSeeFormInputChange} placeholder="Coffee Mug"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}

export default SeeForm;