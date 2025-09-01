import React, { useEffect, useRef } from "react";
import "./services-page.css";

const ServicesPage = () => {
  const sectionRef = useRef(null);

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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with modern web technologies",
      features: [
        "React.js & Next.js Development",
        "Responsive Web Design",
        "UI/UX Implementation",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Progressive Web Apps (PWA)"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Framer Motion"],
      glow: "blue"
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Building robust, scalable server-side solutions and APIs",
      features: [
        "Node.js & Express.js APIs",
        "Database Design & Management",
        "Authentication & Authorization",
        "API Integration",
        "Server Optimization",
        "Security Implementation"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "Socket.io"],
      glow: "green"
    },
    {
      icon: "🚀",
      title: "Full Stack Development",
      description: "End-to-end web application development from concept to deployment",
      features: [
        "Complete Web Applications",
        "E-commerce Solutions",
        "Real-time Applications",
        "Database Architecture",
        "Cloud Deployment",
        "Maintenance & Support"
      ],
      technologies: ["MERN Stack", "AWS", "Docker", "Git", "CI/CD", "REST APIs"],
      glow: "purple"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Interactive Prototypes",
        "Design Handoff"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Adobe Creative Suite"],
      glow: "orange"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile applications with React Native",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Native Module Integration",
        "App Store Deployment",
        "Performance Optimization",
        "Push Notifications"
      ],
      technologies: ["React Native", "Expo", "Redux", "Firebase", "App Store Connect", "Google Play Console"],
      glow: "cyan"
    },
    {
      icon: "🔧",
      title: "DevOps & Deployment",
      description: "Streamlining development workflows and deployment processes",
      features: [
        "CI/CD Pipeline Setup",
        "Cloud Infrastructure",
        "Docker Containerization",
        "Performance Monitoring",
        "Security Audits",
        "Backup & Recovery"
      ],
      technologies: ["Docker", "AWS", "Vercel", "Netlify", "GitHub Actions", "Nginx"],
      glow: "red"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a comprehensive project plan.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
      icon: "✏️"
    },
    {
      step: "03",
      title: "Development",
      description: "Building the application using modern technologies and best practices for optimal performance.",
      icon: "💻"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Thorough testing across different devices and browsers to ensure flawless functionality.",
      icon: "🧪"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Deploying to production servers and ensuring everything runs smoothly.",
      icon: "🚀"
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your application running optimally.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="services-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional <span className="highlight">Services</span>
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into powerful digital solutions with cutting-edge technology
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1">💻</div>
            <div className="element element-2">⚙️</div>
            <div className="element element-3">🎨</div>
            <div className="element element-4">📱</div>
            <div className="element element-5">🚀</div>
            <div className="element element-6">🔧</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">
            Comprehensive web development services tailored to your business needs
          </p>
          
          <div className="services-grid">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`service-card ${service.glow}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">My Work Process</h2>
          <p className="section-subtitle">
            A systematic approach to delivering exceptional results
          </p>
          
          <div className="process-timeline">
            {workProcess.map((process, idx) => (
              <div 
                key={idx} 
                className="process-step"
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <div className="step-number">{process.step}</div>
                <div className="step-icon">{process.icon}</div>
                <div className="step-content">
                  <h3 className="step-title">{process.title}</h3>
                  <p className="step-description">{process.description}</p>
                </div>
                <div className="step-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Me</h2>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🎯</div>
              <h3>Focused Approach</h3>
              <p>Dedicated attention to your project with clear communication and regular updates.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Efficient development process ensuring timely delivery without compromising quality.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">🛡️</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality checks to ensure your application works flawlessly.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">💡</div>
              <h3>Innovation</h3>
              <p>Staying updated with the latest technologies and best practices in web development.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working closely with you to understand your vision and bring it to life.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">📈</div>
              <h3>Scalable Solutions</h3>
              <p>Building applications that can grow with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-primary">Get Started</a>
            <a href="/project" className="cta-secondary">View My Work</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
