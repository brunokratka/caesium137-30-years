import React, { Component } from 'react';
// dependencies
import { Container }        from './Countdown-style';

/**
* Component Countdown 
* @param {String} props.poster    - link for poster
* @param {String} props.webm      - link for webm
* @param {String} props.mp4       - link for mp4
* @param {String} props.title     - string title
* @param {String} props.subtitle  - string subtitle
*/
class Countdown extends Component{
  state = {
    deadline: 'December 25, 2042',
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    interval: null
  };

  componentWillMount = () =>{
    this.getTimeUntil(this.state.deadline);
  }

  componentDidMount = () =>{
   this.setState({
     interval: setInterval(() => this.getTimeUntil(this.state.deadline), 1000) 
   }) 
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  }

  getTimeUntil(deadline){
    const time    = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours   = Math.floor(time / (1000 * 60 * 60) % 24);
    let days      = Math.floor(time / (1000 * 60 * 60 * 24));
    const years   = days > 365 ? parseInt((days / 365), 10) : 0;

    while(days > 365){
      days = days - 365;
    }

    this.setState({ years, days, hours, minutes, seconds });
  }

  render(){
    return(
      <Container>
        <div>{this.state.years} years</div>
        <div>{this.state.days} days</div>
        <div>{this.state.hours} hours</div>
        <div>{this.state.minutes} minutes</div>
        <div>{this.state.seconds} seconds</div>
      </Container>
    );
  }

}

export default Countdown;