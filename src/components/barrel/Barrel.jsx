import React, { Component }   from 'react';
// methods
import { scrollCheck }        from '../../resources/methods/scrollCheck';
// dependencies
import { Container, Section } from './Barrel-style';

/**
* Component Text
* @param {String} text    - string text
* @param {Boolean} eye    - 
*/
class Barrel extends Component {
  state = {
    animate: ''
  }

  componentDidMount = () =>  {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () =>  {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>  {
    scrollCheck('.barrel', 55, () => {
      this.setState({ animate: 'animate' });
      window.removeEventListener('scroll', this.handleScroll);
    });
  }

  render(){
    const {
      animate
    } = this.state;
      return (
        <Container>
        <h3>Os rejeitos estão acomodados da seguinte forma:</h3>
        <Section className="barrel">
          <div className="barrel-images">
            <img src={`${process.env.PUBLIC_URL}/img/barrel/04.svg`} alt="Contêiners"   className={`${animate}`}/>
            <img src={`${process.env.PUBLIC_URL}/img/barrel/03.svg`} alt="Recipientes"  className={`${animate}`}/>
            <img src={`${process.env.PUBLIC_URL}/img/barrel/02.svg`} alt="Caixas"       className={`${animate}`}/>
            <img src={`${process.env.PUBLIC_URL}/img/barrel/01.svg`} alt="Tambores"     className={`${animate}`}/>
          </div>
          <div className="barrel-description">
            <ul>
              <li className={`${animate}`}>
                <span>4.223 tambores</span>
                <p>comuns de 200 litros cada</p>
              </li>
              <li className={`${animate}`}>
                <span>1.347 caixas</span>
                <p>metálicas</p>
              </li>
              <li className={`${animate}`}>
                <span>8 recipientes</span>
                <p>de concreto</p>
              </li>
              <li className={`${animate}`}>
                <span>10 contêiners</span>
                <p>marítimos</p>
              </li>
            </ul>
          </div>
        </Section>
      </Container>
    )
  }
}

export default Barrel;