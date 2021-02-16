import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 70%;
  height: 70%;
  margin: auto;
  padding: 1em;
  top: 10%;
  left: 10%;
  background-color: #000000;
  text-align: center;
  align-items: center;
  font-size: 40px;
  border-radius: 20px;
  line-height: 44px;
`;