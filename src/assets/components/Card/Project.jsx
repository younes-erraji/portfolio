const Project = ({ project: { Project } }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder">
          <a className="project-link" href={Project.link}>
            <i className="fa fa-plus fa-3x m-inline:1"></i>
          </a>
          <a className="project-source" href={Project["source code"]}>
            <i className="fa fa-link fa-3x m-inline:1"></i>
          </a>
        </div>
        <img
          src={`./assets/images/projects/${Project.image}`}
          alt={Project.alt}
        />
      </div>
      <div className="card-info">
        <h3>
          <a href={Project.link} target="_blank" rel="noreferrer">
            {Project.name}
          </a>
        </h3>
        <p>{Project.desc}</p>
        <button className="button secondary display-project">show more</button>
      </div>
    </div>
  );
};

export default Project;
