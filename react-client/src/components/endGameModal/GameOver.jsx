import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const GameOverWrapper = styled.div`
  display: block;
  position: absolute;
  width: 50%;
  height: 70%;
  margin: auto;
  top: 15%;
  left: 25%;
  background-color: blanchedalmond;
`;

const GameOver = (props) => {
  return (
    <GameOverWrapper>
      GAME OVER
    </GameOverWrapper>
  )
}

export default GameOver;