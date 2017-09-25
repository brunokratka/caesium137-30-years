import React, { Component } from 'react';
import { Container }        from './Monitoring-style';

/**
* Component Monitoring
* @param {String} text      - string text
* @param {Array}  resources - string resources
*/
class Monitoring extends Component{
  renderResources = (resources) => {
    return resources.map((item, index) => {
        return (
          <li key={index}>
            <span>{item}</span>
          </li>
        )
    });
  }
  render() {
    const { 
      text,
      monitoringResources 
    } = this.props;

    return(
      <Container>
        <h3>{text}</h3>
        <ul>
          {this.renderResources(monitoringResources)} 
        </ul>
      </Container>
    );
  }
}

export default Monitoring;