import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginWrapper = styled.div`
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
  font-size: 28px;
  border-radius: 20px;
  line-height: 44px;
`;

const UsernameInput = styled.input`
  height: 60px;
  width: 360px;
  margin: 10px 100px 0 100px;
  background-color: rgb(245, 184, 79);
  border-radius: 10px;
  outline: none;
  text-align: center;
  font-family: inherit;
  font-size: 20px;
`;

const EnterInput = styled.input`
  height: 40px;
  width: 150px;
  background-color: rgb(245, 184, 79);
  border-radius: 10px;
  color: inherit;
  outline: none;
  font-family: inherit;
  font-size: 16px;
`;

const SelectSet = styled.select`
  height: 40px;
  width: 300px;
  background-color: rgb(245, 184, 79);
  border-radius: 10px;
  vertical-align: auto;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  margin-right: 10px;
`;

// const getCarts = (username) => {
//   axios.get(`api/carts/${username}`)
//     .then(({ data }) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
const EnterUserName = ({ handleEnter, challengeSets }) => {
  return (
    <FormWrapper onSubmit={handleEnter}>
      <label>
        Enter username:<br />
        <UsernameInput type="text" name="username" autocomplete="off" />
      </label>
      Challenge Set
      <SelectSet name="challengeset" id="challengeset">
        {
          challengeSets.map((challengeSetName) => (
            <option value={challengeSetName}>{challengeSetName}</option>
          ))
        }
        <option value="newChallengeSet">Create your own!</option>
      </SelectSet>
      Difficulty
      <SelectSet name="difficulty" id="difficulty">
        {/* <option value="None">No movement</option> */}
        <option value="Easy" selected>Standard</option>
        <option value="Medium">Hard</option>
        <option value="Hard">Crazy</option>
      </SelectSet>
      <EnterInput type="submit" value="Enter" />
    </FormWrapper>
  )
}

// const handleEnter = (event) => {
//   event.preventDefault();
//   const username = event.target.username.value;
//   axios.post('/api/users', { username });
// }
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      highScore: 0,
      availableCarts: {
        0: 'basic',
        5000: 'decent',
        10000: 'good',
        15000: 'better',
        25000: 'best',
      },
      challengeSets: [],
    }
    this.setState = this.setState.bind(this);
  }

  render () {
    const { handleEnterUsername, challengeSets } = this.props;
    return (
      <LoginWrapper>
        <EnterUserName handleEnter={handleEnterUsername} challengeSets={challengeSets} />
      </LoginWrapper>
    )
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
`;

export default LoginPage;