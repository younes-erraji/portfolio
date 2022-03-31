import React, { Component } from "react";

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
          return this.resourceCard(resource, index);
        });

        this.setState({
          resources: resources,
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
            <span className="slider selected" data-index="0"></span>
            <span className="slider" data-index="1"></span>
            <span className="slider" data-index="2"></span>
            <span className="slider" data-index="3"></span>
          </section>
        </div>
      </div>
    );
  }

  resourceCard = (element, index) => {
    return (
      <li key={index}>
        <a href="#">
          <img src={`./assets/images/resources/${element.resource.name}.svg`} />
        </a>
      </li>
    );
  };
}

export default Resources;
