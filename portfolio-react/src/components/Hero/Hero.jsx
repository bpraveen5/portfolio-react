import React from 'react'
import './Hero.css'
import bg from '../../assets/bg.png'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <h1>
        <span className='name'>Hi! I'm Praveen,</span> 
        <span className='role'> Java Full Stack Developer</span></h1>       
        <h1>focused on building robust</h1>
        <h1>full-stack solutions.</h1>
        <h4>Designing user-friendly interfaces that shape the future of digital experiences.</h4>
    
    <div className='hero-action'>
        <div className='hero-work' >Show my work 
        <i class="fas fa-arrow-right"></i></div>
    </div>
    </div>


  )
}

export default Hero