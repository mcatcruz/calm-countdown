import React from "react";
import styles from "../styles/HomeComponent.module.css";


const TouchForm = ({handleTouchFormInputChange}) => {

    return (
        <>
            <h1 className={styles.title}>Four Items You Touch</h1>
            <form>
            
                <fieldset className={styles.fieldset}>
                
                    <label htmlFor="first_touch_item">
                        <input name="first_touch_item" className={styles.input} type="text" onChange={handleTouchFormInputChange}  placeholder="Headphones"></input>
                    </label>
                    <label htmlFor="second_touch_item">
                        <input name="second_touch_item" className={styles.input}  type="text" onChange={handleTouchFormInputChange} placeholder="Chair"></input>
                    </label>
                    <label htmlFor="third_touch_item">
                        <input name="third_touch_item" className={styles.input}  type="text" onChange={handleTouchFormInputChange} placeholder="Keyboard"></input>
                    </label>
                    <label htmlFor="fourth_touch_item">
                        <input name="fourth_touch_item" className={styles.input}  type="text" onChange={handleTouchFormInputChange} placeholder="Ground"></input>
                    </label>
                    
                </fieldset>
            </form>

        </>
    )
}
export default TouchForm;