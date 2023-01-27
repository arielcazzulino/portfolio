import React from "react";
import HamburguerIcon from "../Hamburguer Icon/HamburguerIcon";
import Styles from "./Nav.module.css"
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import LogoAndTittle from "../LogoAndTittle/LogoAndTittle";
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from "react";


const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () =>{
        openMenu === true ? setOpenMenu (false) : setOpenMenu (true)
    }
    
    console.log(openMenu)
    
    return(
        <nav className={Styles.nav}>
            <LogoAndTittle/>
            
            <div className={Styles.desktopMenu}>
                <DesktopMenu openMenu={openMenu}/>
            </div>

            <div className={!openMenu ? Styles.disabled : ''}> 
                <MobileMenu openMenu={openMenu}/>    
            </div>
            
            <div className={Styles.burguer} onClick={handleClick}>
                <HamburguerIcon />
            </div>
        </nav>
    )
}

export default Nav;