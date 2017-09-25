import React, { Component } from 'react';
import CountUp              from 'react-countup';
// methods
import { scrollCheck }        from '../../resources/methods/scrollCheck';
// dependencies
import { Container, Div }   from './Rejects-style';

/**
* Component Countdown 
* @param {String} props.poster    - link for poster
* @param {String} props.webm      - link for webm
* @param {String} props.mp4       - link for mp4
* @param {String} props.title     - string title
* @param {String} props.subtitle  - string subtitle
*/
class Rejects extends Component{
  state = {
    homeEnd: 0,
    streetEnd: 0,
    carEnd: 0
  };

  componentDidMount = () =>  {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () =>  {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>  {
    scrollCheck('.rejects-count', 55, () => {
      this.setState({ 
        homeEnd: 46,
        streetEnd: 45,
        carEnd: 50
      });
      window.removeEventListener('scroll', this.handleScroll);
    });
  }

  render(){
    const {
      homeEnd,
      streetEnd,
      carEnd
    } = this.state;
    return(
      <Container className="rejects-count">
        <h3>Entre os rejeitos há partes de:</h3>
        <Div>
          <ul>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/casa.svg`} alt="Casa" />
              <div>
                <CountUp 
                  start={0} 
                  end={homeEnd} 
                  duration={4.75}
                  className="counter"
                />
                <span className="counter-description">casas</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/calcadas.svg`} alt="Calçadas" />
              <div>
                <CountUp 
                  start={0} 
                  end={streetEnd} 
                  duration={4.75}
                  className="counter"
                />
                <span className="counter-description">ruas</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/calcada.svg`} alt="Calçada" />
              <div>
                <span>Calçadas</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/utensilios.svg`} alt="Utensílios" />
              <div>
                <span>Utensílios domésticos</span>
              </div>
            </li>

          </ul>

          <ul>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/carro.svg`} alt="Carros" />
              <div>
                <CountUp 
                  start={0} 
                  end={carEnd} 
                  duration={4.75}
                  className="counter"
                />
                <span className="counter-description">veículos</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/arvore.svg`} alt="Árvore" />
              <div>
                <span>Árvores</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/roupas.svg`} alt="Roupas" />
              <div>
                <span>Roupas</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/img/rejects/animais.svg`} alt="Animais" />
              <div>
                <span>Animais domésticos sacrificados</span>
              </div>
            </li>

          </ul>
        </Div>
      </Container>
    );
  }

}

export default Rejects;