import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    // <div>
    <section id ='skills' class="skills-section">
    <h2 class="skills-title">Technical <span>Skills</span></h2>
    <div class="skills-box">
        <div class="skills-container">
            <div class="skill-card">
                <i class="fab fa-java skill-icon"></i>
                <h3 class="skill-name">Java</h3>
            </div>
            <div class="skill-card">
                <i class="fas fa-leaf skill-icon"></i>
                <h3 class="skill-name">Spring Boot</h3>
            </div>
            <div class="skill-card">
                <i class="fas fa-database skill-icon"></i>
                <h3 class="skill-name">MySQL</h3>
            </div>
            <div class="skill-card">
                <i class="fab fa-html5 skill-icon"></i>
                <h3 class="skill-name">HTML5</h3>
            </div>
            <div class="skill-card">
                <i class="fab fa-css3-alt skill-icon"></i>
                <h3 class="skill-name">CSS3</h3>
            </div>
            <div class="skill-card">
                <i class="fab fa-js-square skill-icon"></i>
                <h3 class="skill-name">JavaScript</h3>
            </div>
            <div class="skill-card">
                <i class="fab fa-react skill-icon"></i>
                <h3 class="skill-name">React.js</h3>
            </div>
            <div class="skill-card">
                <i class="fas fa-tools skill-icon"></i>
                <h3 class="skill-name">Build Tools</h3>
            </div>
        </div>
    </div>
</section>
    // </div>
  )
}

export default Skills