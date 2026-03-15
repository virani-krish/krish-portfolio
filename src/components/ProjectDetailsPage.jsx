const ProjectDetailsPage = ({ project, onBackToWork }) => {
  if (!project) {
    return (
      <main className="project-details-page">
        <section className="project-details-section">
          <div className="container">
            <div className="divider project-details-divider"></div>
            <p className="project-details-missing">Project not found.</p>
            <button
              type="button"
              className="project-back-btn"
              onClick={onBackToWork}
            >
              Back to Work
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <section className="project-details-section">
        <div className="container">
          <div className="divider project-details-divider"></div>

          <button
            type="button"
            className="project-back-btn"
            onClick={onBackToWork}
          >
            Back to Work
          </button>

          <div className="project-details-header">
            <span className="section-label">project.</span>
            <p className="project-details-summary">{project.summary}</p>
          </div>

          <div className="project-details-hero">
            <img
              src={project.image}
              alt={project.title}
              className="project-details-image"
            />
            <div className="project-details-main">
              <h1 className="project-details-title">{project.title}</h1>
              <p className="project-details-description">{project.description}</p>

              <div className="project-details-meta">
                <div>
                  <p className="project-details-meta-label">Role</p>
                  <p className="project-details-meta-value">{project.role}</p>
                </div>
                <div>
                  <p className="project-details-meta-label">Timeline</p>
                  <p className="project-details-meta-value">{project.timeline}</p>
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.githubUrl}
                  className="project-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="project-link-btn project-link-btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-details-grid">
            <article className="project-details-card">
              <h2 className="project-details-card-title">Tech Stack</h2>
              <ul className="project-details-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="project-details-card">
              <h2 className="project-details-card-title">Key Features</h2>
              <ul className="project-details-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
