import React, { Component } from 'react';

import FadeSlider           from '../../components/fade-slider/FadeSlider.jsx';
import Image                from '../../components/image/Image.jsx';
import Barrel               from '../../components/barrel/Barrel.jsx';
//Imagens
import map                  from '../../resources/img/mapa-depositos.png';

//Import local
 import { 
    Container,
    Map
 } from './Deposit-style.js';

export default class Deposit extends Component {
    render(){
        return(
            <Container>
                <Map>
                    <Image width='100%' src={map} />
                </Map>
                <FadeSlider />
                <Barrel  />
            </Container>
        );
    }

};