import React from 'react'
import Fade from "react-reveal/Fade"
import neu from "../../images/neu.jpg"
import tcs from "../../images/tcs.jpeg"
import intel from "../../images/intel.jpeg"

const WorkPage = () => {
    return (
        <div>
                 <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-Full w-full object-none overflow-hidden rounded-xl">
              <img src={intel}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">September 2022 - Currently Working</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Intel Corporation
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
                Full-Stack software engineer intern
              </h1>
              <ol className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">

                  <li>Developed and containerized ML models in python using Docker, created Angular and C# web applications and deployed the containers in Intel’s Kubernetes cluster with increased efficiency and scalability</li>
                  <li>Engineered an auto scaler to scale the deployments based on the RabbitMQ queue length using an event driven auto scaler Keda, Prometheus and Kubernetes HPA job and enabled parallel processing trains models 60% faster</li>
              </ol>
              
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={tcs}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">March 2018 - August 2021</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Tata Consultancy Services
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
              Software Developer
              </h1>
              <ol className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">

               <li>Developed microservices in Java, Groovy, and nodejs following all software development practices such as (LDD, HDD, TDD, Unit testing, and CICD pipelining) – improved scalability and fault tolerance </li>
               <li>Created a new rule engine that reduced the order kick-out rate during streaming from source systems. By successful implementation of the project, it reduced the cost by 120k USD per year</li>
            

              </ol>
              
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={neu}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">October 2021 - Currently Working</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Northeastern University
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
                Library Assistant
              </h1>
              <ol className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">

<li>Developed and maintained microservices in Java, Groovy, and Node JS consumed by multiple systems following design patterns and Service-oriented architecture</li>
<li>Created a new rule engine that reduced the order kick-out rate during streaming from source systems. By successful implementation of the project, it reduced the cost by 120k USD per year</li>


</ol>
              
            </div>
          </div>
        </Fade>
      </div>
    )
}

export default WorkPage