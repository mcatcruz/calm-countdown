import React from "react";
import styles from "../styles/HomeComponent.module.css";

// 2/14 TODO: FIGURE OUT WHY H1 IS NOT RENDERING

const SeeForm = ({formTitle, formInput, setFormInput}) => {
    return (
        <>
            <h1 className={styles.title}>{formTitle}</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_seen_item">
                        <input className={styles.input} type="text"></input>
                    </label>
                    <label htmlFor="second_seen_item">
                        <input className={styles.input}  type="text"></input>
                    </label>
                    <label htmlFor="third_seen_item">
                        <input className={styles.input}  type="text"></input>
                    </label>
                    <label htmlFor="fourth_seen_item">
                        <input className={styles.input}  type="text"></input>
                    </label>
                    <label htmlFor="fifth_seen_item">
                        <input className={styles.input}  type="text"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}

export default SeeForm;