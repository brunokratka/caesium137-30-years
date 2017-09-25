import React, { Component } from 'react';

//Import local
import { scrollCheck } from '../../resources/methods/scrollCheck.js';
import depositos from '../../resources/img/depositos.png';
import Image from '../../components/image/Image.jsx';
import { 
    Container,
    LeftContent,
    RightContent,
    MiddleContent,
    Destaque,
    Info
} from './FadeSlider-style.js';

export default class FadeSlider extends Component {
    state = { animate: '' }

    componentDidMount = () =>  {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () =>  {
        window.removeEventListener('scroll', this.handleScroll);
    }

    //Monitora scroll para o evento de animação
    handleScroll = () =>  {
        scrollCheck('.depositos', 100, () => {
            document.querySelectorAll('.depositos .move');

            this.setState({ animate: 'animate' });
            window.removeEventListener('scroll', this.handleScroll);
        });
    }

    render() {
        return(
            <Container className="depositos">
                <LeftContent className={ `${this.state.animate}` } orientation='toRight'>
                    <Destaque>
                       <span>60%</span>
                    </Destaque>
                    <Info>
                        <span>
                            O <strong>depósito principal</strong> tem 60% dos rejeitos.
                            É onde está a cápsula do césio.
                        </span>
                    </Info>
                </LeftContent>

                <RightContent className={ `${this.state.animate}` } orientation='toLeft'>
                    <Destaque>
                        <span>40%</span>
                    </Destaque>
                    <Info>
                        <span>
                            O <strong>depósito 2</strong> tem 40% dos rejeitos, menos contaminados.
                        </span>
                    </Info>
                </RightContent>

                <MiddleContent className={ `${this.state.animate}` } orientation='toTop'>
                    <Image 
                        width="100%"
                        src={ depositos } 
                    />
                </MiddleContent>
            </Container>
        )
    }
};