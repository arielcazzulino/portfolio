import React from 'react'
import me from '../../images/AboutMe.jpg'
import TextArea from './TextArea'
import Styles from './AboutMe.module.css'

const AboutMe = () => {
    return(
        <>
            <div className={Styles.principalDiv}>
                <div className={Styles.auxiliarDiv}>
                    <h1 id="aboutMeH1" className={Styles.aboutMeH1}>About Me</h1>
                    
                    <div className={Styles.sectionsContainer}>    
                        
                        <div className={Styles.leftInteriorDiv}>
                            <img src={me} alt="Decorative IMG" className = {Styles.img} />
                        </div>
        
                        <TextArea/>
                       
                    </div>
            
                </div>
            </div>    
        </>
    )
}

export default AboutMe