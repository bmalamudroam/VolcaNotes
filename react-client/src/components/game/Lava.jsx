

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LavaImg = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  bottom: -10px;
  margin: auto;
  object-fit: stretch;
  max-width: 854px;
`;

const Lava = (props) => {
  return (
    <LavaImg src="http://localhost:3000/images/lava.gif" height="110"/>
  );
}

export default Lava;