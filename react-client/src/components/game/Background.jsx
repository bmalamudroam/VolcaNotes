import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

const BackgroundImage = styled.img`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <BackgroundWrapper>
        <BackgroundImage src="http://localhost:3000/images/game-background.svg"/>
        <BackgroundImage src="http://localhost:3000/images/game-background.svg"/>
        <BackgroundImage src="http://localhost:3000/images/game-background.svg"/>
        <BackgroundImage src="http://localhost:3000/images/game-background.svg"/>
      </BackgroundWrapper>
    )
  }
}

export default Background;