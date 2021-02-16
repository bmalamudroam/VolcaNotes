import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import backgroundImage from './gamebackground.jpg';
import sampleSetMath from '../../sampleSetMath.js';
import ScoreDisplay from './ScoreDisplay.jsx';
import Lava from './Lava.jsx';
import Background from './Background.jsx';
import GameOver from '../endGameModal/GameOver.jsx';
import LoginPage from '../login/Login.jsx';
import axios from 'axios';
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
      leaderboard: [],
      gameOver: false,
      loggedIn: false,
    }
    this.setState = this.setState.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateGameOver = this.updateGameOver.bind(this);
    this.handlePlayAgainClick = this.handlePlayAgainClick.bind(this);
    this.handleEnterUsername = this.handleEnterUsername.bind(this);
  }

  handlePlayAgainClick () {
    this.setState({ currentScore: 0, gameOver: false });
  }

  handleEnterUsername (event) {
    event.preventDefault();
    const username = event.target.username.value;
    axios.post('/api/users', { username });
    this.setState({ username, loggedIn: true });
      // .then( this.setState({ username, loggedIn: true }))
      // .catch( (err) => {
      //   console.log('ERROR: ', err);
      // });
  }

  updateScore (incrementValue) {
    const { currentScore } = this.state;
    this.setState({ "currentScore": currentScore + incrementValue });
  }

  updateGameOver (result) {
    const { currentScore, username } = this.state;
    axios.post('/api/scores', { username, score: currentScore })
      .then(() => {
        axios.get('/api/scores')
          .then(({ data }) => {
            console.log(`data: ${data}, GAME!`);
            this.setState({ gameOver: true, leaderboard: data });
          })
      })
  }

  render () {
    const { currentScore, challengeSet, gameOver, loggedIn, leaderboard } = this.state;
    let login = <LoginPage handleEnterUsername={this.handleEnterUsername}/>;
    if (loggedIn) {
      login = <div />;
    }
    let endgame = <GameOver handlePlayAgainClick={this.handlePlayAgainClick} leaderboard={leaderboard} />;
    if (!gameOver) {
      endgame = <div />;
    }
    return (
      <GameWrapper>
        <Background challengeSet={challengeSet} updateScore={this.updateScore} gameOver={gameOver} updateGameOver={this.updateGameOver}/>
        <ScoreDisplay score={currentScore} />
        <Lava />
        {login}
        {endgame}
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



