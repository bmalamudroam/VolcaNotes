import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Questions from './Questions.jsx';
import Player from './Player.jsx';

const ImageBundle = styled.div`
  display: flex;
  flex-direction: column;
  transition: none;
  transform: translateY(${({numTiles, currentTranslation}) => currentTranslation - (910 * (Math.floor(numTiles) - 1) + 230) }px);
`;
const BackgroundWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const ViewPort = styled.div`
  overflow: hidden;
  display: flex;
  position: absolute;
  width: fit-content;
  height: 700px;
`;

const LittleDude = styled.img`
  display: block;
  position: absolute;
  height: 170px;
  top: 254px;
  left: 669px;
`;

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTranslation: 0,
      nextLevel: 230,
      translationInterval: 10000 /* num ms between 1px translations */,
      currentChallengeIndex: 0,
      playerLoc: 468 /*240*/,
      distanceFromLava: 140 /* 140 */
    }
    this.setState = this.setState.bind(this);
    this.incrementCurrentChallengeIndex = this.incrementCurrentChallengeIndex.bind(this);
  }

  incrementCurrentChallengeIndex () {
    const { currentChallengeIndex } = this.state;
    this.setState({ currentChallengeIndex: currentChallengeIndex + 1});
    console.log(currentChallengeIndex);
  }

  newGame () {
    this.setState({ currentTranslation: 0, nextLevel: 230, translationInterval: 10000, playerLoc: 468, distanceFromLava: 368 });
  }

  translateBackground () {
    if (this.props.gameOver) {
      return;
    }
    const { translationInterval, currentTranslation, nextLevel, distanceFromLava } = this.state;
    let newTranslationInterval = translationInterval;
    let newNextLevel = nextLevel;
    if (translationInterval > 500) {
      this.setState((state) => ({ "translationInterval": 500 }), () => {
        setTimeout(this.translateBackground.bind(this), 0);
      });
    } else {
      if (currentTranslation >= nextLevel) {
        newNextLevel += 230;
        if (newTranslationInterval > 100) {
          newTranslationInterval *= .9; //change this to speed up/slow down game
        }
      }
      this.setState({ currentTranslation: currentTranslation + 23, nextLevel: newNextLevel, translationInterval: newTranslationInterval, distanceFromLava: distanceFromLava - 23 }, () => {
        if (distanceFromLava <= -23) {
          //handle game loss
          this.props.updateGameOver('lose');
        }
        setTimeout(this.translateBackground.bind(this), translationInterval);
      });
    }
  }

  updateDistanceFromLava () {
    const { distanceFromLava } = this.state;
    this.setState({ "distanceFromLava": distanceFromLava + 230 });
  }

  // speedUp () {
  //   const { translationInterval } = this.state;
  //   let newTranslationInterval = translationInterval;
  //   if (newTranslationInterval > 100) {
  //     newTranslationInterval -= 10; //change this to speed up/slow down game
  //   }
  //   console.log(newTranslationInterval);
  //   this.setState({ "translationInterval": newTranslationInterval }, console.log(this.state.translationInterval));
  // }

  render () {
    const { challengeSet, updateScore, updateGameOver } = this.props;
    const { currentTranslation, currentChallengeIndex } = this.state;
    let numQuestions = challengeSet.length;
    let backgroundTiles = [];
    for (let i = 0; i < numQuestions / 3; i += 1) {
      backgroundTiles.push(
        <img src="http://localhost:3000/images/game-background.svg" height="910" />
      );
    }
    return (
      <BackgroundWrapper>
        <ViewPort>
          <ImageBundle numTiles={backgroundTiles.length} currentTranslation={currentTranslation}>
            {
              backgroundTiles.map(tile => (tile))
            }
          </ImageBundle>
          <Questions
            challengeSet={challengeSet}
            updateGameOver={updateGameOver}
            updateScore={updateScore}
            currentTranslation={currentTranslation}
            start={this.translateBackground.bind(this)}
            updateDistanceFromLava={this.updateDistanceFromLava.bind(this)}
            updateIndex={this.incrementCurrentChallengeIndex}
            currentChallengeIndex={currentChallengeIndex}
          />
          <Player
            currentChallengeIndex={currentChallengeIndex}
            currentTranslation={currentTranslation}
            updateDistanceFromLava={this.updateDistanceFromLava.bind(this)}
            updateGameOver={updateGameOver}
          />
        </ViewPort>
      </BackgroundWrapper>
    )
  }
}

export default Background;