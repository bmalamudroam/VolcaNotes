import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

class CreateChallengeSetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
    };
  }
  render () {
    const { submit } = this.props;
    const { challenges } = this.state;
    return (
      <CreateSetWrapper>
        <Title>
          Challenges:
        </Title>
        <ChallengesWrapper>
          <NewChallenge />
          {
            challenges.map(({ question, answer }) => (
              <NewChallengeForm>
                Q: {question} <br />
                A: {answer}
              </NewChallengeForm>
            ))
          }

        </ChallengesWrapper>
        <button onClick={submit}>
          Submit Set!
        </button>
      </CreateSetWrapper>
    )
  }
}

const NewChallenge = (props) => {
  return (
    <NewChallengeForm>
      <SubmitButton type="submit" value="Add" />
      <label>
        Q:
        <FormInput type="text" name="name" />
      </label>
      <br />
      <label>
        A:
        <FormInput type="text" name="name" />
      </label>
    </NewChallengeForm>
  );
}

const CreateSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 70%;
  height: 70%;
  margin: auto;
  padding: 1em;
  top: 10%;
  left: 10%;
  background-color: #000000;
  text-align: center;
  align-items: center;
  font-size: 40px;
  border-radius: 20px;
  line-height: 44px;
`;

const ChallengesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  width: 100%;
  height: 70%;
`;


const NewChallengeForm = styled.form`
  display: block;
  color: black;
  /* box-sizing: border-box; */
  font-family: serif;
  width: 95%;
  min-height: 100px;
  margin-top: 10px;
  background-color: rgb(245, 184, 79);
  text-align: start;
  padding-left: 10px;
  font-size: 18px;
  border-radius: 20px;
`;

const FormInput = styled.input`
  height: 30px;
  margin-left: 8px;
  width: 72%;
  border: 1px dotted black;
  /* font-family: inherit; */
  font-size: 16px;
  color: inherit;
  outline: none;
  background-color: transparent;
`;

const SubmitButton = styled.input`
  position: float;
  float: right;
  font-family: inherit;
  color: inherit;
  padding: -10px;
  height: 100px;
  width: 16%;
  border-radius: 0 20px 20px 0;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  &:hover {
    background-color: orange;
  }
  background-color: inherit;
  border-left: 1px solid black;
`;

const Title = styled.caption`
  font-size: 24px;
  text-decoration: underline;
  text-align: center;
`;


export default CreateChallengeSetPage;