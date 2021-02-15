import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const QuestionBox = styled.div`
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 10px;
  text-align: center;
  height: 100px;
  width: 180px;
  background-color: white;
  left: 48px;
  bottom: 468px;
  transform:
    translateX(${({questionNumber}) => (
      (questionNumber % 2 === 0) ? 0 : 578)}px
    )
    translateY(${({ questionNumber, translation }) => (
      -(228 * questionNumber)) + translation}px
    );
  padding: 10px;
`;


const QuestionForm = ({ challenge, handleGuess }) => {
  if (!challenge) {
    return <div> WINNER </div>
  }
  return (
    <form onSubmit={handleGuess}>
      <label>
        {challenge[0]}
        <input type="text" name="answer" autocomplete="off"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeSet: this.props.challengeSet,
      currentChallengeIndex: 0,
      background: 'white',
      started: false,
    }
    this.setState = this.setState.bind(this);
  }

  handleGuess(event) {
    event.preventDefault();
    const { updateScore, updateGameOver } = this.props;
    let { challengeSet, currentChallengeIndex } = this.state;
    const answer = event.target.answer.value;
    if (!this.state.started) {
      this.props.start();
      this.setState({ started: true});
    }
    if (answer === challengeSet[currentChallengeIndex][1]) {
      currentChallengeIndex += 1;
      updateScore(1000);
      this.setState({ currentChallengeIndex }, () => {
        this.props.updateDistanceFromLava();
        if (currentChallengeIndex === challengeSet.length) {
          updateGameOver();
          //win game endgame
        }
      });
    } else {
      // speedUp();
      //change background color
      //increase translation rate
    }
    event.target.reset();
    event.target.answer.focus();
    event.target.answer.select();
  }

  render() {
    const { challengeSet, currentChallengeIndex } = this.state;
    const { currentTranslation } = this.props;
    return (
      <QuestionBox questionNumber={currentChallengeIndex} translation={currentTranslation}>
        <QuestionForm challenge={challengeSet[currentChallengeIndex]} handleGuess={this.handleGuess.bind(this)}/>
      </QuestionBox>
    )
  }
}

export default Questions;