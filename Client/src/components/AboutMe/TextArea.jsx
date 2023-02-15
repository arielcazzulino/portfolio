import React from "react";
import Styles from './TextArea.module.css'

const TextArea = () =>{
    return(
        <div className={Styles.mainContainer}>
            <h3> <span className={Styles.orangeChar}>&gt;</span> Story:</h3>
                <p>Hello! My name is Ariel and like most children born in the 90s with the possibility of having access to a computer, the world of the internet has always caught my attention and I was lucky enough to live through its development and growth. This led me to be interested in the web world, learning on my own about UX/UI design, SEO, and the use of different CMS, especially Wordpress. Learning these technologies has allowed me to work on prominent projects, such as working with the beekeeping sector of the government of Uruguay.
                    Due to the need to professionalize myself even more and to be able to dedicate myself full time to what I am passionate about, I have decided to learn to program through the "Fullstack Developer" bootcamp, where I have learned Javascript, React, Redux, Node, Express, SQL, Sequelize, PostgreSQL, Git and Github. During the final project stage, I had the opportunity to work on a real project for "El campito refugio," a well-known NGO in Buenos Aires that is dedicated to rescuing street dogs.
                </p>
            
            <h3> <span className={Styles.orangeChar}>&gt;</span> Background:</h3>
                <p>In addition to what I have already mentioned, I am a third-year student of a Bachelor's degree in Psychology (UBA), a therapeutic companion, and I have training in psychological first aid, which gives me a wide variety of tools to communicate and negotiate with my clients, as well as to resolve conflicts.</p>
            
            <h3> <span className={Styles.orangeChar}>&gt;</span> Hobbies:</h3>
                <p>I love spending my free time doing things I like and helping me relax and disconnect from the stress of daily life. Among my favorite hobbies are going to the gym, practicing martial arts, reading mainly about philosophy, and listening to music of all kinds of genres.

Going to the gym is one of my favorite activities, it allows me to stay in shape and take care of my health. I also love the challenge of overcoming my limits and improving day by day. Practicing martial arts is also a way to stay active and, at the same time, learn a useful skill and develop my self-discipline and self-control.

Philosophy is a topic that has always interested me and I like to read about it. I love exploring the ideas of the great philosophers and understanding how they think and see the world. It is a way to broaden my perspective and learn new things.

Music is another of my favorite hobbies. I love listening to music of all kinds of genres, from rock to classical music. Music is a form of expression that allows me to relax and forget about everything else.

In conclusion, my hobbies allow me to stay active and in shape, learn new things and relax. They are a way to balance my life and enjoy my free time.</p>
        </div>
    )
}

export default TextArea