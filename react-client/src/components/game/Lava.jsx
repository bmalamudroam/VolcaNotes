

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LavaImg = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: auto;
  object-fit: stretch;
`;

const Lava = (props) => {
  return (
    <LavaImg src="http://localhost:3000/images/lava.gif" height="100"/>
  );
}

export default Lava;