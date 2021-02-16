import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LittleDude = styled.img`
  display: block;
  position: absolute;
  height: 170px;
  top: 254px;
  left: 669px;
  transform:
    translateX(${({questionNumber}) => (
      (questionNumber % 2 === 0) ? 0 : -581)}px
    )
    translateY(${({ questionNumber, translation }) => (
      -(228 * questionNumber)) + translation}px
    );
`;

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChallengeIndex: 0,
      started: false,
    }
    this.setState = this.setState.bind(this);
  }


  render () {
    const { currentTranslation, currentChallengeIndex } = this.props;
    return (
      <LittleDude src="http://localhost:3000/images/littledude.svg" questionNumber={currentChallengeIndex} translation={currentTranslation}/>
    )
  }
}

export default Player;
