import React  from 'react';
import opop   from '../../resources/cesio/img/icons.svg';

// Local dependencies
import { Container, Logo }  from './Header-style';

export default function Header() {
  return(
    <Container>
        <span>ESPECIAIS</span>
        <Logo src={opop} alt="O Popular"/>
    </Container>
  )
}