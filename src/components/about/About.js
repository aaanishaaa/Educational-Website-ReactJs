import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Timer from "../timer"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
    </>
  )
}

export default About
