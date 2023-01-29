import React from 'react';
import Styles from "./FilterButtons.module.css";

const FilterButtons = (props) =>{
    
    const { selectedCategory, setSelectedCategory } = props;
    
    const handleClick = (category) => {
        setSelectedCategory(category);
    }
    
    return(
        <div className={Styles.mainContainer}>
            <button onClick={() => handleClick('all')} className={selectedCategory === 'all' ? Styles.selectedButton : Styles.button}>All</button>
            <button onClick={() => handleClick('backEnd')} className={selectedCategory === 'backEnd' ? Styles.selectedButton : Styles.button}>Back End</button>
            <button onClick={() => handleClick('frontEnd')} className={selectedCategory === 'frontEnd' ? Styles.selectedButton : Styles.button}>Front End</button>
            <button onClick={() => handleClick('fullStack')} className={selectedCategory === 'fullStack' ? Styles.selectedButton : Styles.button}>Full Stack</button>
            <button onClick={() => handleClick('wordpress')} className={selectedCategory === 'wordpress' ? Styles.selectedButton : Styles.button}>Wordpress</button>
            <button onClick={() => handleClick('academic')} className={selectedCategory === 'academic' ? Styles.selectedButton : Styles.button}>Academic</button>
        </div>
    )
}

export default FilterButtons