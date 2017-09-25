import React, { Component } from 'react';
import { array } from 'prop-types'

//Import local
import { 
  Container,
  Button,
  Arrow, 
  Row,
  Col,
  Funcao,
  Nome, 
  Colaborador 
} from './Expediente-style.js';

export default class Expediente extends Component {
  state = { open: false }

  static propTypes = {
    exped: array
  }

  handleToggle = (e) => {
    const target = e.target.offsetTop;
    const { open } = this.state;
    this.setState({  open: !open  })
    if(!open){
      setTimeout(function(){
        window.scrollTo(0, target);
      }, 50);
    }
  }

  render() {
    const listItems = this.props.exped.map(function(item, index) {
        return (
          <Row key={index}>
            <Col>
              {item.colaboradores.map((item, index) => (
                <Colaborador key={index}>
                  <Funcao>{item.funcao}</Funcao>  
                  {item.nome.map((nome, index) => (
                    <Nome key={index}>{nome}</Nome>
                  ))}              
                </Colaborador>
              ))}
            </Col>
          </Row>
        );
    });

    return ( 
      <Container> 
        <Button onClick={this.handleToggle}>
          <span>EXPEDIENTE</span>
          <Arrow open={this.state.open}/> 
        </Button>
        {
          this.state.open
            ?
              <div>
                <div>
                  {listItems}
                </div> 
              </div>
            : null
        }
      </Container>  
    )
  }
}