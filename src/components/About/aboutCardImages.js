import React from 'react'
import AboutCard from './aboutCard'
import coffee from "../../images/coffee.jpg"
import code from "../../images/code.jpg"
import food from "../../images/food.png"
import fitness from "../../images/fitness.png"
import series from "../../images/series.png"
import web from "../../images/Problem.jpg"

const AboutCardImages = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutCard
        imgSrc={code}
        position="Code"
      ></AboutCard>
      <AboutCard
        imgSrc={web}
        position="Problem Solving"
      ></AboutCard>
      <AboutCard
        imgSrc={coffee}
        position="Coffee"
      ></AboutCard>
      <AboutCard
        imgSrc={series}
        position="TV, Movies"
      ></AboutCard>
      <AboutCard
        imgSrc={fitness}
        position="Fitness"
      ></AboutCard>
      <AboutCard
        imgSrc={food}
        position="Healthy Cooking "
      ></AboutCard>
    </div>
  )
}

export default AboutCardImages