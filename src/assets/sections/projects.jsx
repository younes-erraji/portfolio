import React, { Component } from "react";

import Project from "../components/Card/Project";

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
        const { length } = this.props;
        if (length) response.length = length;

        projects = response.map((project, index) => {
          return <Project project={project} key={index} />;
        });

        this.setState({
          projects,
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
          <section className="show-more">{this.props.children}</section>
        </div>
      </div>
    );
  }
}

export default projects;
