import React from 'react';
import RichText from './RichText';
import styled, { keyframes } from 'styled-components'
import { fadeIn, zoomInDown } from 'react-animations'

const ZoomInAnimation = keyframes`${zoomInDown}`;

const fadeInAnimation = keyframes`${fadeIn}`;
const HeroWrapper = styled.section`
    background: url('${props => props.backgroundImage}');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 66px);
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    animation: 2s ${fadeInAnimation};

    div {
      max-width: 800px;
      margin-left: 72%;
      margin-top: 27%;
      animation: 1.5s ${ZoomInAnimation};
    }
`

const Hero = ({ title, content, backgroundImage }) => {
  console.log(title, content);
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <RichText render={title} />
        <p>
          {content}
        </p>
      </div>
    </HeroWrapper>
  );
}

export default Hero;