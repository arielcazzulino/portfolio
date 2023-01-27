/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import projectsJson from '../../Portfolio/portfolioData';
import { filter } from 'lodash';
import FilterButtons from '../FilterButtons/FilterButtons'
import Styles from './Projects.module.css'

const Projects = () => {
    
    const [projects, setProjects] = useState([]);    
    const [selectedCategory, setSelectedCategory] = useState('all'); 

    useEffect(() => {
        setProjects(projectsJson);
    }, []);

    const filteredProjects = filter(projectsJson, (project) => {
        if(selectedCategory === 'all') {
            return true;
        }
             
    return project.category.includes(selectedCategory);

    });

    return(
        <>
            <FilterButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <div className={Styles.projectsContainer}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className={Styles.projectCard}>
                        <h3>{project.tittle}</h3>
                        <p>{project.category}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects