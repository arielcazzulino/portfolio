import React from "react";
import Styles from './logoAndTittle.module.css'
import logo from "../../images/whiteLogo.png"

export default function LogoAndTittle(){
    return (
        <div className={Styles.div}>
            <img src={logo} alt='Logo AFC FullStack Web Developer' className={Styles.logo}/>
            <h1 className={Styles.h1}>AFC</h1>
        </div>
    )
}