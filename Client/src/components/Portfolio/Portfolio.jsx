import React from "react";
import Projects from "../ProjectsFilter/Projects/Projects";
import Styles from "./Portfolio.module.css"


const Portfolio = () =>{
    return(
       <div className={Styles.principalDiv}>
            <div className={Styles.auxiliarDiv}>
                <h1 id="portfolioH1" className={Styles.h1}>Portfolio</h1>
                <div className={Styles.project}>
                    <Projects/>
                </div> 
            </div>
       </div> 
    )
}

export default Portfolio;