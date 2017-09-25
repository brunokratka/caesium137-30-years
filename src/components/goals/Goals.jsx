import React, { Component } from 'react';
// import { arrayOf, object } from 'prop-types';
// Separate local imports from dependencies
import { Container }        from './Goals-style';

class Goals extends Component{

  renderGoals = (goals) => {
    return goals.map((item, index) => {
        return (
          <li key={index + 1}>
            <span>{index + 1}:</span>
            <span>{item.description}</span>
          </li>
        )
    });
  }

  render() {
    const { 
      goals 
    } = this.props;

    return (
      <Container>
        <ul>
          {this.renderGoals(goals)}
        </ul>
        <div><span>Fonte: Cnen e Relatório Técnico assinado por Rex Nazaré Alves</span></div>
      </Container>
    );
  }
}

export default Goals;