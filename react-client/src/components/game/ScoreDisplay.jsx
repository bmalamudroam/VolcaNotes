import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ScoreWrapper = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  width: 100%;
  height: 50px;
  margin: 15px auto;
  text-align: center;
  font-size: 32px;
`;
const ScoreDisplay = (props) => {
  return (
    <ScoreWrapper>1000</ScoreWrapper>
  );
}

export default ScoreDisplay;