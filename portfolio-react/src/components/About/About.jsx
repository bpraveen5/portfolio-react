import React from 'react'
import './About.css'
import praveen from '../../assets/praveen.png'
import comp from '../../assets/comp.jpg'
import java from '../../assets/java.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About <span> Me</span> </h1>
        </div>
        <div className="about-container">
        <div className="image-box">
            <img src={praveen} alt="Profile Image"/>
        </div>
        <div className="text-box">
            <p>
                Hi, I'm Praveen, a passionate developer focused on building efficient and scalable web solutions. 
                I enjoy solving complex problems and creating impactful digital experiences. With hands-on experience 
                in development and real-world projects, I am always eager to learn and grow in the tech industry.
            </p><br></br><br></br>
            <a href={java} className='btn'>Certificates</a>

        </div>
        </div>
    </div>
  )
}
export default About