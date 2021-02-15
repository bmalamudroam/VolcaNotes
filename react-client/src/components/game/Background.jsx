import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Questions from './Questions.jsx';

const ImageBundle = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(${({numTiles, currentTranslation}) => currentTranslation - (910 * (Math.floor(numTiles) - 1) + 230) }px);
  /* 14950920 * floor(numQuestions / 3) + 230*/
`;
const BackgroundWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const ViewPort = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  position: absolute;
  width: fit-content;
  height: 700px;
  /* box-sizing: border-box; */
`;

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTranslation: 0,
      nextLevel: 230,
      translationInterval: 10000 /* num ms between 1px translations */,
    }
    this.setState = this.setState.bind(this);
  }

  translateBackground () {
    const { translationInterval, currentTranslation, nextLevel } = this.state;
    let newTranslationInterval = translationInterval;
    let newNextLevel = nextLevel;
    if (translationInterval > 500) {
      debugger;
      this.setState((state) => ({ "translationInterval": 500 }), () => {
        setTimeout(this.translateBackground.bind(this), 0);
      });
    } else {
      if (currentTranslation >= nextLevel) {
        newNextLevel += 230;
        if (newTranslationInterval > 100) {
          newTranslationInterval -= 10; //change this to speed up/slow down game
        }
      }
      this.setState({ currentTranslation: currentTranslation + 23, nextLevel: newNextLevel, translationInterval: newTranslationInterval }, () => {
        setTimeout(this.translateBackground.bind(this), translationInterval);
      });
    }
  }

  // speedUp () {
  //   const { translationInterval } = this.state;
  //   let newTranslationInterval = translationInterval;
  //   if (newTranslationInterval > 100) {
  //     newTranslationInterval -= 10; //change this to speed up/slow down game
  //   }
  //   console.log(newTranslationInterval);
  //   this.setState({ translationInterval: newTranslationInterval }, console.log(this.state.translationInterval));
  // }

  // componentDidMount () {
  //   this.translateBackground();
  // }

  render () {
    const { challengeSet } = this.props;
    const { currentTranslation } = this.state;
    let numQuestions = challengeSet.length;
    let backgroundTiles = [];
    for (let i = 0; i < numQuestions / 3; i += 1) {
      backgroundTiles.push(
        <img src="http://localhost:3000/images/game-background.svg " height="910" />
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
          <Questions challengeSet={challengeSet} currentTranslation={currentTranslation} start={this.translateBackground.bind(this)}/>
        </ViewPort>
      </BackgroundWrapper>
    )
  }
}

export default Background;