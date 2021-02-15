import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import backgroundImage from './gamebackground.jpg';
import sampleSetMath from '../../sampleSetMath.js';
import ScoreDisplay from './ScoreDisplay.jsx';
import Lava from './Lava.jsx';
import Background from './Background.jsx';
// import Questions from './Questions.jsx';


const GameWrapper = styled.div`
  display: block;
  position: absolute;
  left: 20%;
  width: 60%;
  height: 90%;
  color: blue;
  margin: auto;
`;


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cart: '',
      challengeSet: sampleSetMath/* holds tuples [Q, A] */,
      currentScore: 0,
    }
    this.setState = this.setState.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore (incrementValue) {
    const { currentScore } = this.state;
    this.setState({ "currentScore": currentScore + incrementValue });
  }

  render () {
    const { currentScore, challengeSet } = this.state;
    return (
      <GameWrapper>
        <Background challengeSet={challengeSet} updateScore={this.updateScore} />
        <ScoreDisplay score={currentScore} />
        <Lava />
        {/* <Questions challengeSet={challengeSet}/> */}
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



