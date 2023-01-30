import React from "react";
import { useState } from "react";
import notFound from '../../../images/Projects/imageNotFound.jpg'
import Styles from './ProjectsCards.module.css'

const ProjectsCards = ({tittle, category, description, image, id}) => {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }

    return(
        <>
            <div
                key={id}
                className={`${Styles.projectCard} ${hover && image ? Styles.active : ''}`}
                style={{backgroundImage : `url(${image ? image : notFound})`}} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >

                <div className={hover ? Styles.infoContainer : Styles.none}>
                    <h3 className={Styles.infoContainerH3}>{tittle}</h3>  
                    <div className={Styles.categorys}>
                        {category.map(c => <p key={c}> #{c} </p>)}
                    </div>
                </div>

            </div>
        </>
    ) 
}

export default ProjectsCards
