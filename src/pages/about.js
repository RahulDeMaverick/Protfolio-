import React from 'react'
import Layout from '../components/layout'
import AboutInfo from '../components/About/aboutInfo'
import AboutCard from '../components/About/aboutCard'
import AboutCardImages from '../components/About/aboutCardImages'

const About = () => {
  return (
    <Layout>
      <AboutInfo></AboutInfo>
      {/* <AboutCard></AboutCard> */}
      <AboutCardImages></AboutCardImages>
    </Layout>
  )
}

export default About