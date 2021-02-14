import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ScoreWrapper = styled.div`
  display: block;
  width: 40%;
  height: 50px;
  margin: 15px auto;
  text-align: center;
  font-size: 32px;
  border: 1px solid black;

`;
const ScoreDisplay = (props) => {
  return (
    <ScoreWrapper>1000</ScoreWrapper>
  );
}

export default ScoreDisplay;