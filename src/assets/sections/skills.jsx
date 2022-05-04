import React, { Component } from "react";

import Skill from "../components/Card/Skill";

class skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    let skills = [];
    fetch("./assets/json/skills.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { count } = this.props;
        response.length = count ? count : response.length;
        skills = response.map((skill, index) => {
          return <Skill skill={skill} key={index} />;
        });

        this.setState({
          skills,
        });
      })
      .catch((reject) => {
        console.error(reject);
      });
  }

  render() {
    return (
      <section className="skills" id="skills">
        <h2 className="special-heading">Skills</h2>
        <p className="skills-text">## 📊 Languages and Tools.</p>
        <div className="container">
          <div className="skills-container">{this.state.skills}</div>
        </div>
      </section>
    );
  }
}

export default skills;
