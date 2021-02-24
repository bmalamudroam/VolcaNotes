import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LeaderBoard from './LeaderBoard.jsx';

const GameOverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 50%;
  height: 70%;
  margin: auto;
  padding: 1em;
  top: 10%;
  left: 20%;
  background-color: #000000;
  align-items: center;
  font-size: 40px;
  border-radius: 20px;
`;

const PlayAgain = styled.button`
  width: 340px;
  height: 100px;
  font-size: 30px;
  line-height: 40px;
  border: none;
  background-color: rgb(245, 184, 79);
  :active {
    background-color: rgb(39,4,2);
  }
  outline:none;
  font-family: inherit;
  border-radius: 10px;
`;

const Anchor = styled.a`
  color: blue;
`;
const GameOver = ({ handlePlayAgainClick, leaderboard, winner }) => {
  const endgameMessage = winner ? 'WINNER!' : 'GAME OVER';
  return (
    <GameOverWrapper>
      {endgameMessage}
      <LeaderBoard scores={leaderboard}/>
      <PlayAgain onClick={handlePlayAgainClick}>
        <Anchor href="http://localhost:3000/">Play Again?!</Anchor>
      </PlayAgain>
    </GameOverWrapper>
  )
}

export default GameOver;