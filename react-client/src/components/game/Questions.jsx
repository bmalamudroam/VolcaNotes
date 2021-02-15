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
    translateY(${({ questionNumber }) => (
      -(228 * questionNumber))}px
    );
  padding: 10px;
`;


const QuestionForm = ({ challenge, handleAnswer }) => {
  return (
    <form onSubmit={handleAnswer}>
      <label>
        {challenge[0]}
        <input type="text" name="answer"/>
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
    }
  }

  handleAnswer(event) {
    event.preventDefault();
    const answer = event.target.answer.value;
    console.log(answer);
  }

  render() {
    const { challengeSet, currentChallengeIndex } = this.state;
    return (
      <QuestionBox questionNumber={currentChallengeIndex}>
        <QuestionForm challenge={challengeSet[currentChallengeIndex]} handleAnswer={this.handleAnswer.bind(this)}/>
      </QuestionBox>
    )
  }
}

export default Questions;