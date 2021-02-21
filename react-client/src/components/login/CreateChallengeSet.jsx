import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const CreateChallengeSetPage = ({ submit }) => {
  return (
    <CreateSetWrapper>
      <Title>
        Challenges:
      </Title>
      <NewChallenge />
      <button onClick={submit}>
        Submit Set!
      </button>
    </CreateSetWrapper>
  )
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

const NewChallengeForm = styled.form`
  width: 100%;
  height: 100px;
  background-color: rgb(245, 184, 79);
  text-align: start;
  padding-left: 10px;
  font-size: 18px;
  border-radius: 20px;
`;

const FormInput = styled.input`
  height: 30px;
  width: 72%;
  border: 1px dotted grey;
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
  border-left: 1px solid grey;
`;

const Title = styled.caption`
  font-size: 24px;
  text-decoration: underline;
  text-align: center;
`;


export default CreateChallengeSetPage;