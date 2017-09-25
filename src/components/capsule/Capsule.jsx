import React from 'react';
// Separate local imports from dependencies
import { 
    Container, 
    BgCapsule, 
    Caesium, 
    Texture, 
    Light, 
    Glow,
    Infos,
    Info
}from './Capsule-style';

function Capsule() {
    return (
        <Container>
            <BgCapsule src={`${process.env.PUBLIC_URL}/img/capsule.png`}/>
            <Caesium>
                <Texture />
                <Light />
            </Caesium>
            <Glow />
            <Infos>
                <Info>96 g</Info>
                <Info>3 cm</Info>
            </Infos>
        </Container>
    )
}

export default Capsule;