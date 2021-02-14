import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ScoreDisplay from './ScoreDisplay.jsx';

const GameWrapper = styled.div`
  width: 70%;
  height: 90%;
  margin: auto;
  border: 1px solid black;
`;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cart: '',
      challengeSet: [/* holds tuples [Q, A] */],
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
    return (
      <GameWrapper>
        <ScoreDisplay />
        This is the game map
      </GameWrapper>
      /*
      <GameWrapper>

        <Map translation={currentTranslation}>
          <Background currentPlatform={currentPlatform}/>
          <Player platform={platform} cart={cart}/>
        </Map>
        <Lava
      </GameWrapper>
      */
    )
  }
}



export default Game;



