import React from 'react'
import Layout from '../components/layout'
import Project from '../components/Projects/project'
import ProjectData from '../components/Projects/projectData'
import Skills from '../components/Projects/skills'

const Projects = () => {
  return (
      <Layout>
          <ProjectData></ProjectData>
          <Skills></Skills>
      </Layout>
    
    
  )
}

export default Projects