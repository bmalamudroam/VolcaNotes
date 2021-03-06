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
import CreateChallengeSetPage from '../login/CreateChallengeSet.jsx';
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

// const MusicPlayer = styled.audio`
//   position: absolute;
//   width: 40%;
//   left: 30%;
//   bottom: 0;
// `;
const Song = () => {
  return (
    <audio loop id="gamesong">
      <source src="/images/gamesong.ogg" type="audio/ogg"/>
    </audio>
  )
}

const PausePlaySong = styled.button`
  position: absolute;
  width: auto;
  font-size: 32px;
  font-family: inherit;
  color: blue;
  outline:none;
  background-color: transparent;
  border: none;
  right: 10px;
  bottom: 10px;
`;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cart: '',
      challengeSet: [{question: '', answer: ''}, {question: '', answer: ''},{question: '', answer: ''}, {question: '', answer: ''}]/* holds tuples [Q, A] */,
      challengeSets: [],
      currentScore: 0,
      leaderboard: [],
      difficulty: 'Easy',
      gameOver: false,
      winner: false,
      loggedIn: false,
      showCreateSet: false,
      muted: true,
    }
    this.setState = this.setState.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateGameOver = this.updateGameOver.bind(this);
    this.handlePlayAgainClick = this.handlePlayAgainClick.bind(this);
    this.handleEnterUsername = this.handleEnterUsername.bind(this);
    this.handleToggleAudio = this.handleToggleAudio.bind(this);
    this.handleSubmitChallengeSet = this.handleSubmitChallengeSet.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  handlePlayAgainClick () {
    this.setState({ currentScore: 0, gameOver: false });
  }

  setDifficulty (event) {
    const difficulty = '';
    this.setState({ difficulty });
  }

  handleToggleAudio () {
    const { muted } = this.state;
    const music = document.getElementById("gamesong");
    if (muted) {
      music.volume = 0.2;
      music.play();
    } else {
      music.pause();
    }
    this.setState({ muted: !muted });
  }

  handleSubmitChallengeSet (event) {
    event.preventDefault();
    if (event.target.id !== "backNewSet") {
      this.updateChallengeSets();
      let { username } = this.state;
      let challengeset = event.target.id;
      this.updateChallengeSet(challengeset, username);
    }
    this.setState({ showCreateSet: false });
  }

  updateChallengeSets () {
    axios.get('/api/challengesets')
      .then(({ data }) => {
        const challengeSets = [];
        data.forEach(obj => {
          challengeSets.push(obj.challengeset);
        })
        this.setState({ challengeSets });
      })
  }

  componentDidMount () {
    this.updateChallengeSets();
  }

  handleEnterUsername (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const challengeset = event.target.challengeset.value;
    const difficulty = event.target.difficulty.value;
    if (challengeset === "newChallengeSet") {
      this.setState({ showCreateSet: true, username, difficulty });
      return;
    }
    axios.post('/api/users', { username });
    this.updateChallengeSet(challengeset, username, difficulty);
  }

  updateChallengeSet (challengeset, username, difficulty) {
    axios.get(`/api/challenges/${challengeset}`)
      .then(({ data }) => {
        this.setState({ username, difficulty, loggedIn: true, challengeSet: data });
      });
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
            const winner = (result === 'wins') ? true : false;
            this.setState({ gameOver: true, leaderboard: data, winner });
          })
      })
  }

  render () {
    const { currentScore, challengeSet, gameOver, loggedIn, leaderboard, muted, showCreateSet, challengeSets, winner, difficulty } = this.state;
    let login = <LoginPage handleEnterUsername={this.handleEnterUsername} challengeSets={challengeSets} />;
    if (loggedIn) {
      login = <div />;
    }
    let createChallengeSet = <CreateChallengeSetPage submit={this.handleSubmitChallengeSet}/>;
    if (!showCreateSet) {
      createChallengeSet = <div />;
    }
    let endgame = <GameOver handlePlayAgainClick={this.handlePlayAgainClick} leaderboard={leaderboard} winner={winner} />;
    if (!gameOver) {
      endgame = <div />;
    }
    let audioText = 'Audio(off)';
    if (!muted) {
      audioText = 'Audio(on)';
    }
    return (
      <GameWrapper>
        <Background
          challengeSet={challengeSet}
          updateScore={this.updateScore}
          gameOver={gameOver} updateGameOver={this.updateGameOver}
          muted={muted}
          difficulty={difficulty}
        />
        <ScoreDisplay score={currentScore} />
        <Lava />
        {login}
        {endgame}
        {createChallengeSet}
        <Song />
        <PausePlaySong onClick={this.handleToggleAudio}>{audioText}</PausePlaySong>
      </GameWrapper>
    )
  }
}

export default Game;



