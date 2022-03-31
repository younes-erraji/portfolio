import React, { Component } from "react";

class skills extends Component {
  constructor(props) {
    super();
    this.state = {
      skills: [],
      count: props.count,
    };
  }

  componentDidMount() {
    let skills = [];
    fetch("./assets/json/skills.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        skills = response.map((skill, index) => {
          return this.SkillCard(skill, index);
        });

        this.setState({
          skills: skills,
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

  SkillCard = (element, index) => {
    return (
      <div className="skills-data" key={index}>
        <div className="skills-names">
          <img
            className="skill-icon"
            src={`./assets/icons/skills/${element.skill.icon}`}
            alt=""
          />
          <span className="skill-name">{element.skill.name}</span>
        </div>
        <div
          className="skill-bar"
          style={{ width: element.skill.percentage }}
        ></div>
        <div>
          <span className="skills-percentage">{element.skill.percentage}</span>
        </div>
      </div>
    );
  };
}

export default skills;
