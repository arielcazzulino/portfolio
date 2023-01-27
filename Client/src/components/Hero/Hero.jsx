import React from "react";
import img from "../../images/profile.jpg"
import Styles from "./Hero.module.css"
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'

const Hero = () =>{
    return (
    <div className={Styles.principalDiv}>
        <div className={Styles.div1}>
            <div>
                <h1 className={Styles.h1}>I'm <span className={Styles.name}>Ariel</span> Cazzulino</h1>
                <p className={Styles.devscription}>Fullstack Developer</p>
                <div>
                    <img src={linkedin} alt="Linkedin" className={Styles.socialIcon}/>
                    <img src={github} alt="Github" className={Styles.socialIcon}/>
                    <img src={email} alt="Email" className={Styles.socialIcon}/>
                </div>
            </div>
        </div>
        <div className={Styles.div2}>
            <img  src={img} alt="Fullstack Web Developer" className={Styles.img}/>
        </div>
    </div>
    )
}

export default Hero;