import React, { Component }   from 'react';
import scrollToComponent      from 'react-scroll-to-component';
// import { string }             from 'prop-types';
import { ArrowButton }        from './Arrow-style';

class Arrow extends Component{

  componentWillUnmount = () =>  {
    window.removeEventListener('click', this.handleScroll);
  }

  handleScroll = () =>  {
    scrollToComponent(document.querySelector('.time-division'), { offset: 0, align: 'middle', duration: 1250, ease:'outExpo'});
    window.removeEventListener('click', this.handleScroll);
  }

  render(){
    return(
      <ArrowButton className='arrow-to-division' onClick={this.handleScroll}/>
    );
  }
}

export default Arrow;