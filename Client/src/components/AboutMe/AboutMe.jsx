import React from 'react'
import me from '../../images/AboutMe.jpg'
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

                        <div className={Styles.rightInteriorDiv}>
                            <h3> <span className={Styles.orangeChar}>&gt;</span> Story:</h3>
                            <p>Hello! My name is Ariel and like most children born in the 90s with the possibility of having access to a computer, the world of the internet has always caught my attention and I was lucky enough to live through its development and growth. This led me to be interested in the web world, learning on my own about UX/UI design, SEO, and the use of different CMS, especially Wordpress. Learning these technologies has allowed me to work on prominent projects, such as working with the beekeeping sector of the government of Uruguay.
                                Due to the need to professionalize myself even more and to be able to dedicate myself full time to what I am passionate about, I have decided to learn to program through the "Fullstack Developer" bootcamp, where I have learned Javascript, React, Redux, Node, Express, SQL, Sequelize, PostgreSQL, Git and Github. During the final project stage, I had the opportunity to work on a real project for "El campito refugio," a well-known NGO in Buenos Aires that is dedicated to rescuing street dogs.
                            </p>
                            <h3> <span className={Styles.orangeChar}>&gt;</span> Background:</h3>
                            <p>In addition to what I have already mentioned, I am a third-year student of a Bachelor's degree in Psychology (UBA), a therapeutic companion, and I have training in psychological first aid, which gives me a wide variety of tools to communicate and negotiate with my clients, as well as to resolve conflicts.</p>
                            <h3> <span className={Styles.orangeChar}>&gt;</span> Hobbies:</h3>
                            <p>my hobbies</p>
                        </div>
                    </div>
            
                </div>
            </div>    
        </>
    )
}

export default AboutMe