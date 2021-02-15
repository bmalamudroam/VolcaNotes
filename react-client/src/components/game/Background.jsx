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
      currentTranslation: 110,
      translationRate: 23 /* px per second */,
    }
  }

  // translateBackground () {
  //   const
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
          <Questions challengeSet={challengeSet} currentTranslation={currentTranslation}/>
        </ViewPort>
      </BackgroundWrapper>
    )
  }
}

export default Background;