
import React from 'react'
import Fade from "react-reveal/Fade"

const Project = ({Title,Info1,Info2,Img1,Title2,Info3,Info4,Img2,link1,link2}) => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
          <Fade bottom cascade>
            <div className="flex">
              <div className="w-3/4 m-2 text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  {Title}
                </h1>
                <p className="mt-5 opacity-70">
                  {Info1}{Info2}
                </p>
              </div>
              <div className="w-2/4 rounded-xl overflow-hidden m-2">
              <a href={link1}><img src={Img1}></img></a>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="flex flex-row-reverse mt-10">
              <div className="w-4/5 m-2 text-right text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  {Title2}
                </h1>
                <p className="mt-5 opacity-70">
                  {Info3}{Info4}
                </p>
              </div>
              <div className="w-3/5 rounded-xl overflow-hidden m-2">
              <a href={link2}><img src={Img2}></img></a>
              </div>
            </div>
          </Fade>
        </div>
        
      )
}

export default Project