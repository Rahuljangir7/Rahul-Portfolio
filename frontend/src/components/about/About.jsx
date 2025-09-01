import React, { useEffect, useRef } from "react";
import "./about.css";
import { aboutData, aboutImage } from "../../data";
import Button from "../../utility/button/Button";

const About = () => {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse move effect for avatar
    const handleMouseMove = (e) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        avatarRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    };

    const handleMouseLeave = () => {
      if (avatarRef.current) {
        avatarRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
    };

    const avatarElement = avatarRef.current;
    if (avatarElement) {
      avatarElement.addEventListener("mousemove", handleMouseMove);
      avatarElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (avatarElement) {
        avatarElement.removeEventListener("mousemove", handleMouseMove);
        avatarElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      observer.disconnect();
    };
  }, []);

  const workExperience = [
    {
      icon: "⭐",
      title: "CIB on the Mobile",
      description: "Software Engineer • 2022-2024",
      glow: "white"
    },
    {
      icon: "🟠",
      title: "CIB on the Mobile",
      description: "Frontend Developer • 2021-2022",
      glow: "orange"
    },
    {
      icon: "☕",
      title: "CIB on the Mobile",
      description: "UI/UX Designer • 2020-2021",
      glow: "blue"
    },
    {
      icon: "🚀",
      title: "CIB on the Mobile",
      description: "Full Stack Developer • 2019-2020",
      glow: "cyan"
    }
  ];

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟡" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "💜" },
    { name: "Google Analytics", icon: "📊" },
    { name: "C++", icon: "🔵" }
  ];

  const featuredProjects = [
    {
      title: "Featured Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Project+Screenshot",
      rating: "⭐⭐"
    },
    {
      title: "Example Project",
      description: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product management, shopping cart functionality, and secure payment processing with real-time inventory tracking.",
      image: "https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Project+Screenshot",
      rating: "⭐⭐"
    }
  ];

  return (
    <div className="portfolio-container" ref={sectionRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="greeting">Hello! I Am Rahul Jangir</h1>
            <h2 className="headline">
              A Developer who Judges a book by its{" "}
              <span className="highlighted-text">cover</span>...
            </h2>
            <p className="role-description">
              I'm a MERN Stack Developer. | Currently, I'm a{" "}
              <span className="company-highlight">Freelance Developer</span>
            </p>
            <p className="about-description">
              A self-taught MERN stack developer, functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium between
              user needs and business goals.
            </p>
          </div>

          <div className="avatar-container" ref={avatarRef}>
            <div className="avatar-glow"></div>
            <div className="avatar-wrapper">
              {aboutImage.map((item, idx) => (
                <img key={idx} src={item.image} alt="Rahul Jangir" className="avatar" />
              ))}
            </div>
            <div className="floating-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {workExperience.map((exp, idx) => (
            <div key={idx} className="experience-card" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className={`card-icon ${exp.glow}`}>{exp.icon}</div>
              <h3 className="card-title">{exp.title}</h3>
              <p className="card-description">{exp.description}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-content">
          <p className="skills-cta">
            I'm currently looking to join a cross-functional team that values improving
            people's lives through accessible design
          </p>
          <div className="skills-visualization" ref={skillsRef}>
            <div className="central-logo">R</div>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-item"
                style={{
                  '--angle': `${(idx * 360) / skills.length}deg`,
                  '--radius': '120px',
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="connection-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.map((project, idx) => (
        <section key={idx} className="project-section">
          <h2 className="section-title">{project.title}</h2>
          <div className="project-content">
            <div className="project-description">
              <p>{project.description}</p>
              <div className="project-rating">{project.rating}</div>
            </div>
            <div className="project-image-container">
              <div className="project-image-frame">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-cta">
          I'm currently looking to join a cross-functional team that values improving
          people's lives through accessible design, or have a project in mind? Let's connect.
        </p>
        <div className="contact-info">
          <a href="mailto:rahuljangir@example.com" className="email-link">
            rahuljangir@example.com
          </a>
          <div className="social-links">
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🐙</a>
            <a href="#" className="social-icon">🔗</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
