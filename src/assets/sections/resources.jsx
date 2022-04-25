import React, { Component } from "react";

import Resource from "../components/Card/Resource";

class Resources extends Component {
  constructor(props) {
    super();
    this.state = {
      resources: [],
      count: props.count,
    };
  }

  componentDidMount() {
    let resources = [];
    fetch("./assets/json/resources.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        resources = response.map((resource, index) => {
          return <Resource resource={resource} key={index} />;
        });

        this.setState({
          resources,
        });
      })
      .catch((reject) => {
        console.error(reject);
      });
  }

  render() {
    return (
      <div className="resources">
        <div className="container">
          <h2 className="special-heading">Resources</h2>
          <p>## 🚀 Lorem ipsum dolor sit amet.</p>
          <div className="resources-content">
            <ul className="list-unstyled">{this.state.resources}</ul>
          </div>
          <section>
            <span className="slider active" data-index="0"></span>
            <span className="slider" data-index="1"></span>
            <span className="slider" data-index="2"></span>
            <span className="slider" data-index="3"></span>
          </section>
        </div>
      </div>
    );
  }
}

export default Resources;
