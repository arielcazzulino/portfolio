import React from "react";
import notFound from '../../../images/Projects/imageNotFound.jpg'
import Styles from './ProjectsCards.module.css'

const ProjectsCards = ({tittle, category, description, image, id}) => {
    return(
        <>
            <div key={id} className={Styles.projectCard} style={{backgroundImage : `url(${image ? image : notFound})`}}>
                <div className={Styles.infoContainer}>
                    <h3 className={Styles.infoContainerH3}>{tittle}</h3>  
                    <p>{category}</p>
                    <p>{description}</p>    
                </div>                                            
            </div>
        </>
    )
}

export default ProjectsCards
