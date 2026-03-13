import React from 'react';
import './App.css';
import profileImg from './profile.png'; /* <--- This is your new line! */

function App() {
  return (
// ... the rest of your code continues here
    <div className="portfolio-container">
      {/* Navbar with Custom Logo */}
      <nav className="navbar">
        <div className="custom-logo">
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Laptop screen */}
              <rect x="20" y="30" width="60" height="35" rx="3" />
              {/* Laptop base */}
              <path d="M10 65 L90 65 L85 70 L15 70 Z" />
              {/* Code brackets */}
              <path d="M40 42 L33 48 L40 54" />
              <path d="M60 42 L67 48 L60 54" />
              <path d="M53 40 L47 56" />
              {/* Floating Keyboard */}
              <rect x="25" y="5" width="50" height="25" rx="2" fill="#0a192f" />
              <rect x="30" y="10" width="6" height="6" rx="1" />
              <rect x="40" y="10" width="6" height="6" rx="1" />
              <rect x="50" y="10" width="6" height="6" rx="1" />
              <rect x="60" y="10" width="6" height="6" rx="1" />
              <rect x="30" y="20" width="6" height="6" rx="1" />
              <rect x="40" y="20" width="16" height="6" rx="1" />
              <rect x="60" y="20" width="6" height="6" rx="1" />
              {/* Decorative dots and lines */}
              <circle cx="15" cy="20" r="1.5" />
              <circle cx="85" cy="40" r="1.5" />
              <line x1="15" y1="10" x2="20" y2="10" />
              <line x1="80" y1="15" x2="85" y2="15" />
            </svg>
          </div>
          <div className="logo-text-main">AHMAD RIAZ</div>
          <div className="logo-text-sub">ASSOCIATE SOFTWARE ENGINEER</div>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section with Picture */}
      <header className="hero">
        <div className="hero-text">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Ahmad Riaz.</h1>
          <h2 className="subtitle">I build things for the web and mobile.</h2>
          <p className="objective">
            To secure a rewarding and challenging position in a fast-growing company where I can 
            utilize my abilities, add value in all business areas, and work as a valuable asset.
          </p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>

        <div className="hero-image-container">
          <div className="gradient-shape"></div>
          <div className="dots dots-left"></div>
          <div className="dots dots-right"></div>
<img src={profileImg} alt="Ahmad Riaz" className="profile-pic" />        </div>
      </header>

      {/* Skills Section */}
      <section id="about" className="section">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages & Databases</h4>
            <p>JavaScript, HTML, CSS, Python, SQL</p>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <p>React.js, React Native, Node.js</p>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <p>Git, FireBase, REST APIs, Dev-C++, MySQL</p>
          </div>
          <div className="skill-category">
            <h4>Core Concepts</h4>
            <p>OOP, Data Structures & Algorithms (DSA), Database Design</p>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section">
        <h3 className="section-title">Experience & Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Front-End Developer</h4>
            <h5>Cloud Service Group (CSG)</h5>
            <p>Utilized JavaScript, HTML, and CSS to create interactive and visually appealing web experiences.</p>
          </div>
          <div className="timeline-item">
            <h4>Web Development Trainee</h4>
            <h5>Web Development Course (May 2023 - Sep 2023)</h5>
            <p>Learned full-stack web development. Built responsive websites with user authentication and database integration.</p>
          </div>
          <div className="timeline-item">
            <h4>BS Computer Science (2022 - 2026)</h4>
            <h5>University of Lahore</h5>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>AI-Based Book Reselling Platform</h4>
            <p>Developed a mobile app for students to access affordable second-hand books with secure authentication and backend API integration.</p>
            <span className="tech-stack">React Native • Firebase • Node.js</span>
          </div>
          <div className="project-card">
            <h4>Conference Schedule Web</h4>
            <p>A full-stack web application for managing academic conferences, featuring user authentication, detailed views, and a rating system.</p>
            <span className="tech-stack">HTML • CSS • JavaScript</span>
          </div>
          <div className="project-card">
            <h4>Admission Application Portal</h4>
            <p>Advanced system to streamline student applications, evaluate eligibility, and support seamless registration.</p>
            <span className="tech-stack">C++ • OOP • File Handling</span>
          </div>
          <div className="project-card">
            <h4>Education System Database</h4>
            <p>Designed and implemented a comprehensive relational database covering student records, faculty management, and scheduling.</p>
            <span className="tech-stack">MySQL • ER Modeling</span>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <h2>Let's Connect</h2>
        <p>I am currently looking for new opportunities. My inbox is always open!</p>
        <div className="contact-info">
          <p>📞 +923137264856</p>
          <p>✉️ Ahmi2662@gmail.com</p>
          <a href="https://www.linkedin.com/in/ahmad-riaz-a3ab22310" target="_blank" rel="noreferrer" className="social-link">LinkedIn Profile</a>
        </div>
      </footer>
    </div>
  );
}

export default App;