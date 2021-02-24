import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

class CreateChallengeSetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      challengeSetName: '',
    };
    this.setState = this.setState.bind(this);
    this.handleAddChallenge = this.handleAddChallenge.bind(this);
  }

  handleAddChallenge (event) {
    event.preventDefault();
    const question = event.target.question.value;
    const answer = event.target.answer.value;
    let { challenges, challengeSetName } = this.state;
    challenges.unshift({ question, answer });
    axios.post('/api/challenges', { challengeSetName, question, answer })
    event.target.reset();
    event.target.question.focus();
    event.target.question.select();
    this.setState({ challenges });
  }

  getSetName (event) {
    event.preventDefault();
    const challengeSetName = event.target.setName.value;
    this.setState({ challengeSetName });
  }

  render () {
    const { submit } = this.props;
    const { challenges, challengeSetName } = this.state;
    if (challengeSetName === '') {
      return (
        <CreateSetWrapper>
          <NewChallengeForm onSubmit={this.getSetName.bind(this)}>
            <SubmitButton type="submit" value="Submit" />
            <label>
              Set name:
              <FormInput type="text" name="setName"/>
            </label>
          </NewChallengeForm>
        </CreateSetWrapper>
      )
    }
    return (
      <CreateSetWrapper>
        <Title>
          {challengeSetName}:
        </Title>
        <ChallengesWrapper>
          <NewChallenge handleAddChallenge={this.handleAddChallenge} />
          {
            challenges.map(({ question, answer }) => (
              <NewChallengeForm>
                Q: {question} <br />
                A: {answer}
              </NewChallengeForm>
            ))
          }

        </ChallengesWrapper>
        <ExitButton onClick={submit} id={challengeSetName}>
          Submit Set!
        </ExitButton>
        <ExitButton onClick={submit} id="backNewSet">
          Back
        </ExitButton>
      </CreateSetWrapper>
    )
  }
}

const NewChallenge = ({ handleAddChallenge }) => {
  return (
    <NewChallengeForm onSubmit={handleAddChallenge}>
      <SubmitButton type="submit" value="Add" />
      <label>
        Q:
        <FormInput type="text" name="question" />
      </label>
      <br />
      <label>
        A:
        <FormInput type="text" name="answer" />
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
  width: 67%;
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
  font-size: 22px;
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

const ExitButton = styled.button`
  background-color: rgb(245, 184, 79);
  &:hover {
    background-color: orange;
  }
  font-size: 22px;
  font-family: serif;
  color: black;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  border-radius: 10px;
  padding: 5px;
`;

const Title = styled.caption`
  font-size: 24px;
  text-decoration: underline;
  text-align: center;
`;


export default CreateChallengeSetPage;