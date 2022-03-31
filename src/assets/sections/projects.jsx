import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowDown from "../icons/arrow-down.svg";

class projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    let projects = [];
    fetch("./assets/json/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        projects = response.map((project, index) => {
          return this.projectCard(project, index);
        });

        this.setState({
          projects: projects,
        });
      })
      .catch((reject) => {
        console.error(reject);
      });
  }

  render() {
    return (
      <div className="projects" id="projects">
        <div className="container">
          <h2 className="special-heading">projects</h2>
          <p>## 👨‍💻 If you do it right, it will last forever.</p>
          <div className="projects-content">{this.state.projects}</div>
          <section className="show-more">
            <Link className="button primary show-more" to="/projects">
              show more
              <img src={arrowDown} alt="" />
            </Link>
          </section>
        </div>
      </div>
    );
  }

  projectCard = (element, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-image">
          <div className="image-placeholder">
            <a className="project-link" href={element.Project.link}>
              <i className="fa fa-plus fa-3x m-inline:1"></i>
            </a>
            <a className="project-source" href={element.Project["source code"]}>
              <i className="fa fa-link fa-3x m-inline:1"></i>
            </a>
            <a href="#" className="project-image">
              <i className="fa fa-link fa-3x m-inline:1"></i>
            </a>
          </div>
          <img
            src={`./assets/images/projects/${element.Project.image}`}
            alt={element.Project.alt}
          />
        </div>
        <div className="card-info">
          <h3>
            <a href="#" target="_blank">
              {element.Project.name}
            </a>
          </h3>
          <p>{element.Project.desc}</p>
          <button className="button secondary display-project">
            show more
          </button>
        </div>
      </div>
    );
  };
}

export default projects;
