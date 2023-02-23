/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { filter } from 'lodash';
import api from '../../Api Wordpress/api';
import FilterButtons from '../FilterButtons/FilterButtons';
import ProjectsCards from '../ProjectsCards/ProjectsCards';
import Styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchData = async () => {
    const wpPosts = await api.get('/posts', {
      params: {
        _embed: 'wp:featuredmedia, wp:term', // incluir img y categorias
      },
    });
    setProjects(wpPosts.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProjects = filter(projects, (project) => {
    if (selectedCategory === 'all') {
      return true;
    }

    if (project._embedded && project._embedded['wp:term']) {
      return project._embedded['wp:term'].some(
        (term) => term.some((category) => category.slug === selectedCategory)
      );
    }

    return false;
  });

  return (
    <div className={Styles.mainContainer}>
      <FilterButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div className={Styles.projectsContainer}>
        {filteredProjects.map((project) => (
          <ProjectsCards
            key={project.id}
            tittle={project.title.rendered}
            image={
              project._embedded['wp:featuredmedia']
                ? project._embedded['wp:featuredmedia'][0]['media_details']['sizes']['large'][
                    'source_url'
                  ]
                : undefined
            }
            excerpt={project.excerpt.rendered}
            category={project._embedded['wp:term'][0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;



