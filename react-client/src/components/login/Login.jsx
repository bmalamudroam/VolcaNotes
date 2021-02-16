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
  font-size: 40px;
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

// const getCarts = (username) => {
//   axios.get(`api/carts/${username}`)
//     .then(({ data }) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
const EnterUserName = () => {
  return (
    <form>
      <label>
        Enter username:<br />
        <UsernameInput type="text" name="username" />
      </label>
      <EnterInput type="submit" value="Enter" />
    </form>
  )
}
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
      }
    }
  }

  render () {
    return (
      <LoginWrapper>
        <EnterUserName />
      </LoginWrapper>
    )
  }
}

export default LoginPage;