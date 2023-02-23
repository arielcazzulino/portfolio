import React from "react";
import { useState } from "react";
import notFound from '../../../images/Projects/imageNotFound.jpg'
import Styles from './ProjectsCards.module.css'

const ProjectsCards = ({tittle, category, excerpt, image, id}) => {
    
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
                    <div>
                        <p className={Styles.excerpt}>{excerpt.replace(/<[^>]+>/g, '')}</p>
                    </div>
                    <div className={Styles.categorys}>
                        {
                            category.map((objeto) => (
                                <p key={objeto.name}>#{objeto.name}</p> 
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    ) 
}

export default ProjectsCards
