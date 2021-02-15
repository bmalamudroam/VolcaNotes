import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const QuestionBox = styled.div`
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 100px;
  width: 180px;
  background-color: white;
  left: 636px;
  bottom: 240px;
  transform:
    translateX(${({questionNumber}) => (
      (questionNumber % 2 === 0) ? 0 : -588)}px
    )
    translateY(${({ questionNumber }) => (
      -(230 * questionNumber))}px
    );
  padding: 10px;
`;

const QuestionForm = (props) => {
  return (
    <form>
      <label>
        QUESTION:
        <input type="text" name="answer" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

const Questions = () => {
  return (
    <QuestionBox questionNumber={0}>
      <QuestionForm />
    </QuestionBox>
  )
}

export default Questions;