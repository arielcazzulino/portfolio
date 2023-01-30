/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import projectsJson from '../../Portfolio/portfolioData';
import { filter } from 'lodash';
import FilterButtons from '../FilterButtons/FilterButtons'
import ProjectsCards from '../ProjectsCards/ProjectsCards';
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
        <div className={Styles.mainContainer}>
            <FilterButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <div className={Styles.projectsContainer}>
                {filteredProjects.map((project) => (
                    <ProjectsCards
                        key = {project.id} 
                        tittle = {project.tittle}
                        image = {project.img}
                        description = {project.description}
                        category = {project.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects

