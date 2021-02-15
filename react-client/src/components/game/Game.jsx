import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import backgroundImage from './gamebackground.jpg';
import sampleSetMath from '../../sampleSetMath.js';
import ScoreDisplay from './ScoreDisplay.jsx';
import Lava from './Lava.jsx';
import Background from './Background.jsx';
import Questions from './Questions.jsx';


const GameWrapper = styled.div`
  display: block;
  position: absolute;
  left: 20%;
  width: 60%;
  height: 90%;
  color: blue;
  margin: auto;
  border: 1px solid black;
`;


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cart: '',
      challengeSet: sampleSetMath/* holds tuples [Q, A] */,
      translationRate: 0 /* pixels per 100ms */,
      currentPlatform: 0,
      currentTranslation: 0,
      currentScore: 0,
    }
  }

  movePlatform (toPlatform) {
    //do stuff
  }

  translateMap (translationRate) {
    // update currentTranslation
    // maybe set timeout for next translation
    // maybe adjust translationRate
    // check if dead
  }

  handleGuessSubmit (event) {
    event.preventDefault();
    //check if its right
     //this could be a method that handles success
      //if so, update current platform
      //figure out how to move between platforms
      //update currentScore
      //check for win
        //if win, display endgame modal
    //if not
      // increase translationRate
      // indicate incorrectness
  }

  render () {
    const { currentScore, challengeSet } = this.state;
    return (
      <GameWrapper>
        <Background challengeSet={challengeSet}/>
        <ScoreDisplay score={currentScore}/>
        <Lava />
        <Questions challengeSet={challengeSet}/>
      </GameWrapper>
      /*
      <GameWrapper>

        <Map translation={currentTranslation}>
          <Background currentPlatform={currentPlatform}/>
          <Player platform={platform} cart={cart}/>
        </Map>
        <Lava />
      </GameWrapper>
      */
    )
  }
}

export default Game;



