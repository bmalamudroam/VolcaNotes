import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/Game.jsx';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: 'Press Start 2P', cursive;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cartOptions: [],
      cart: '',
      challengeSets: {/*name, [set]*/},
      selectedChallengeSet: {},
    }
  }

  componentDidMount() {
    //get username via alert
    //get users highscore and use it to determine cart options
  }

  render () {
    return (
      <AppWrapper>
        <Game />
        {/*
        Maybe <WelcomeModal />
        Maybe <endGameModal />

        */}
      </AppWrapper>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));