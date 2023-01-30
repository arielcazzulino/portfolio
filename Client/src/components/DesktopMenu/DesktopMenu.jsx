import React from "react";
import Styles from './DesktopMenu.module.css'

export default function DesktopMenu (openMenu){
    
    return(
        <div className={openMenu === true ? Styles.disabled : Styles.menu}>
                <ul className={Styles.ul}>
                    <li className={Styles.li}><a href="#portfolioH1">Portfolio</a></li>
                    <li className={Styles.li}><a href="#aboutMeH1">About</a></li>
                    <li className={Styles.li}>Contact</li>
                </ul>
                <button className={Styles.button}>Download CV</button>
        </div>
    )
}