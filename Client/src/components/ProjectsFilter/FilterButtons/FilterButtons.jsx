import React from 'react';
import Styles from "./FilterButtons.module.css";

const FilterButtons = (props) =>{
    
    const { selectedCategory, setSelectedCategory } = props;
    
    const handleClick = (category) => {
        setSelectedCategory(category);
    }
    
    return(
        <div className={Styles.mainContainer}>
            <button onClick={() => handleClick('all')} className={selectedCategory === 'all' ? 'selectedFirst' : 'firstButton'}>All</button>
            <button onClick={() => handleClick('backEnd')} className={selectedCategory === 'backEnd' ? 'selected' : 'midButtons'}>Back End</button>
            <button onClick={() => handleClick('frontEnd')} className={selectedCategory === 'frontEnd' ? 'selected' : 'midButtons'}>Front End</button>
            <button onClick={() => handleClick('fullStack')} className={selectedCategory === 'fullStack' ? 'selected' : 'midButtons'}>Full Stack</button>
            <button onClick={() => handleClick('wordpress')} className={selectedCategory === 'wordpress' ? 'selected' : 'midButtons'}>Wordpress</button>
            <button onClick={() => handleClick('academic')} className={selectedCategory === 'academic' ? 'selectedLast' : 'lastButton'}>Academic</button>
        </div>
    )
}

export default FilterButtons