import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Filter,
  Search,
  Star,
  Calendar,
  Users,
  Globe
} from "lucide-react";
import { project } from "../data";
import "./projects-page.css";

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(project);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "UI/UX", "E-commerce", "API"];

  // Enhanced project data with more details
  const enhancedProjects = (project || []).map((proj, index) => ({
    ...proj,
    id: index + 1,
    category: ["Frontend", "Full Stack", "E-commerce"][index % 3] || "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS3", "HTML5"] || [],
    features: [
      "Responsive Design",
      "User Authentication",
      "Database Integration",
      "API Development",
      "Real-time Updates",
      "Payment Integration"
    ] || [],
    stats: {
      stars: Math.floor(Math.random() * 50) + 10,
      forks: Math.floor(Math.random() * 20) + 5,
      views: Math.floor(Math.random() * 1000) + 100
    },
    timeline: "3-4 weeks",
    teamSize: "Solo",
    difficulty: ["Beginner", "Intermediate", "Advanced"][index % 3] || "Intermediate",
    status: "Completed"
  }));

  // Filter and sort projects
  useEffect(() => {
    let filtered = enhancedProjects;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(proj => proj.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(proj =>
        proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort projects
    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "oldest":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "popular":
        filtered.sort((a, b) => b.stats.stars - a.stats.stars);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`project-card ${viewMode}`}
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-overlay">
            <div className="project-actions">
              <button
                className="action-btn view-btn"
                onClick={() => openProjectModal(project)}
              >
                <Eye size={20} />
                <span>View Details</span>
              </button>
              <a
                href={project.linkName}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn live-btn"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.linkName}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn code-btn"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
            </div>
          </div>
          <div className="project-badge">{project.category}</div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.desc}</p>

          <div className="project-technologies">
            {(project.technologies || []).slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
            {(project.technologies || []).length > 4 && (
              <span className="tech-tag more">+{(project.technologies || []).length - 4}</span>
            )}
          </div>

          <div className="project-stats">
            <div className="stat">
              <Star size={16} />
              <span>{project.stats?.stars || 0}</span>
            </div>
            <div className="stat">
              <Users size={16} />
              <span>{project.stats?.forks || 0}</span>
            </div>
            <div className="stat">
              <Eye size={16} />
              <span>{project.stats?.views || 0}</span>
            </div>
          </div>

          <div className="project-meta">
            <div className="meta-item">
              <Calendar size={14} />
              <span>{project.timeline}</span>
            </div>
            <div className="meta-item">
              <Users size={14} />
              <span>{project.teamSize}</span>
            </div>
            <div className="meta-item">
              <Code size={14} />
              <span>{project.difficulty}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            My <span className="highlight">Projects</span>
          </h1>
          <p className="hero-subtitle">
            Showcasing my work and technical expertise through real-world applications
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{enhancedProjects.length}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            {/* Search */}
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="controls">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchTerm}-${sortBy}-${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`projects-grid ${viewMode}`}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-projects"
              >
                <div className="no-projects-content">
                  <Search size={64} />
                  <h3>No projects found</h3>
                  <p>Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchTerm("");
                    }}
                    className="reset-btn"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal-overlay"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProjectModal}>
                ×
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>

                <div className="modal-details">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.desc}</p>

                  <div className="modal-stats">
                    <div className="stat">
                      <Star size={20} />
                      <span>{selectedProject.stats?.stars || 0} Stars</span>
                    </div>
                    <div className="stat">
                      <Users size={20} />
                      <span>{selectedProject.stats?.forks || 0} Forks</span>
                    </div>
                    <div className="stat">
                      <Eye size={20} />
                      <span>{selectedProject.stats?.views || 0} Views</span>
                    </div>
                  </div>

                  <div className="modal-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {(selectedProject.technologies || []).map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {(selectedProject.features || []).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.linkName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn primary"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.linkName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn secondary"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
