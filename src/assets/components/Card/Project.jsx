const Project = ({ project }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder">
          <a className="project-link" href={project.Project.link}>
            <i className="fa fa-plus fa-3x m-inline:1"></i>
          </a>
          <a className="project-source" href={project.Project["source code"]}>
            <i className="fa fa-link fa-3x m-inline:1"></i>
          </a>
        </div>
        <img
          src={`./assets/images/projects/${project.Project.image}`}
          alt={project.Project.alt}
        />
      </div>
      <div className="card-info">
        <h3>
          <a href={project.Project.link} target="_blank" rel="noreferrer">
            {project.Project.name}
          </a>
        </h3>
        <p>{project.Project.desc}</p>
        <button className="button secondary display-project">show more</button>
      </div>
    </div>
  );
};

export default Project;
