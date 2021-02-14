import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  object-fit: cover;
`;

// const img = styled.img`
// `;

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <BackgroundWrapper>
        <img src="http://localhost:3000/images/game-background.svg"/>
        <img src="http://localhost:3000/images/game-background.svg"/>
        <img src="http://localhost:3000/images/game-background.svg"/>
        <img src="http://localhost:3000/images/game-background.svg"/>
      </BackgroundWrapper>
    )
  }
}

export default Background;