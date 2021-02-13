import React from 'react';
import ReactDOM from 'react-dom';

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
      <div>
        This is the game map
      </div>
    )
  }



