import React from 'react';
import bank from '../../assets/bank.png';
import student from '../../assets/student.png';
import vote from '../../assets/vote.jpg';
import user from '../../assets/user.png';
import './Work.css';

const Work = () => {
  return (
    <section id ='projects' className="projects-section">
      <h2>My <span>Projects</span></h2>
      <div className="projects-container">
        <div className="project-card">
          <img src={bank} alt="Project 1" />
          <div className="project-info">
            <h3>Personal Finance System</h3>
            <p>Track expenses, manage budgets, and analyze financial patterns with this Java-based application.</p>
            <p className="tech-stack">Tech: Java, JSP, MySQL, HTML, CSS, XML</p>
            <a href="https://github.com/bpraveen5/InfosysBankApp" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={student} alt="Project 2" />
          <div className="project-info">
            <h3>Student Marks Management</h3>
            <p>The Student Marks Management System simplifies student record management with automated grading and performance analysis.</p>
            <p className="tech-stack">Tech: Java, Spring Boot, React.js, Hibernate and  MySQL.</p>
            <a href="https://github.com/bpraveen5" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View on GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src={vote} alt="Project 3" />
          <div className="project-info">
            <h3>E-Voting System</h3>
            <p>Secure and transparent voting system built on Blockchain technology.</p>
            <p className="tech-stack">Tech: Blockchain, Python, Django,HTML, CSS, JavaScript, React</p>
            <a href="https://github.com/bpraveen5/E-Voting-System-Blockchain" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View on GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src={user} alt="Project 4" />
          <div className="project-info">
            <h3>User Management System</h3>
            <p>CRUD application for managing users.</p>
            <p className="tech-stack">Tech: Java, Servlet, MySQL, Html, CSS</p>
            <a href="https://github.com/bpraveen5/User_Management_System" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
