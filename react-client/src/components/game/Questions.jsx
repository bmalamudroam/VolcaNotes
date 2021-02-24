import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Woo = () => {
  return (
    <audio id="woo">
      <source src="/images/short-woo.wav" type="audio/wav"/>
    </audio>
  )
}

const Uhoh = () => {
  return (
    <audio id="uhoh">
      <source src="/images/uh-oh.wav" type="audio/wav"/>
    </audio>
  )
}

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
        {challenge.question}
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
      // currentChallengeIndex: 0,
      started: false,
    }
    this.setState = this.setState.bind(this);
  }

  // newGame () {
  //   this.setState({ currentChallengeIndex: 0, started: false })
  // }

  woo () {
    const wooNoise = document.getElementById("woo");
    if (!this.props.muted) {
      wooNoise.play();
    }
  }

  uhoh () {
    const uhohNoise = document.getElementById("uhoh");
    if (!this.props.muted) {
      uhohNoise.play();
    }
  }

  handleGuess(event) {
    event.preventDefault();
    const { updateScore, updateGameOver, updateIndex, currentChallengeIndex } = this.props;
    let { challengeSet } = this.props;
    const answer = event.target.answer.value;
    if (!this.state.started) {
      this.props.start();
      this.setState({ started: true});
    }
    if (answer === challengeSet[currentChallengeIndex].answer) {
      this.woo();
      updateIndex();
      updateScore(1000);
      this.props.updateDistanceFromLava();
      if (currentChallengeIndex === challengeSet.length - 1) {
        updateGameOver('wins');
        //win game endgame
      }
    } else {
      this.uhoh();
      // speedUp();
      //change background color
      //increase translation rate
    }
    event.target.reset();
    event.target.answer.focus();
    event.target.answer.select();
  }

  render() {
    const { challengeSet } = this.props;
    const { currentTranslation, currentChallengeIndex } = this.props;
    return (
      <QuestionBox questionNumber={currentChallengeIndex} translation={currentTranslation}>
        <QuestionForm challenge={challengeSet[currentChallengeIndex]} handleGuess={this.handleGuess.bind(this)}/>
        <Woo />
        <Uhoh />
      </QuestionBox>
    )
  }
}

export default Questions;