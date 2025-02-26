import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1ac135a0-ab63-481c-b8ce-302f2f9611b9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <section id='contact' className="contact-section">
      <h2>Get <span>in</span> touch</h2>
      <form  onSubmit={onSubmit} className="contact-form">
        <label htmlFor=""></label>
        <input type="text" placeholder="Your Name" name="name" />
        <label htmlFor=""></label>
        <input type="email" placeholder="Your Email" name="email" />
        <label htmlFor=""></label>
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type='submit'>Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/bpraveen5" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/b-praveen-kumar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:bpraveen8040@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <footer className="copyright">
        <p>Copyright &copy; 2025 Praveen B</p>
      </footer>
    </section>
  );
};

export default Contact;
