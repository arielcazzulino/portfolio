import React from "react";
import Styles from './MobileMenu.module.css'

export default function MobileMenu(openMenu){
    return (
        <div className= {openMenu === false ? Styles.disabled :  Styles.menu}>
                <ul className={Styles.ul}>
                    <li className={Styles.li}>Portfolio</li>
                    <li className={Styles.li}>About</li>
                    <li className={Styles.li}>Contact</li>
                </ul>
                <button className={Styles.button}>Download CV</button>
        </div>
    )
}