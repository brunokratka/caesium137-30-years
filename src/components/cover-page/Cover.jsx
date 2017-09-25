import React, { Component }   from 'react';
// import { string }             from 'prop-types';
import { Container }   from './Cover-style';

class Cover extends Component{
  render(){
    const { 
      img,
      titleImg,
      text
    } = this.props;
    return(
      <Container>
      <div className="home-main">
        <div>
          <figure>
            <img src={titleImg} alt=""/>
          </figure>
          <span>{text}</span>
        </div>
      </div>
      </Container>
    );
  }
}

export default Cover;