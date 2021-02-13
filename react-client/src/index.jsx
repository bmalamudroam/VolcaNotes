import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cartOptions: [],
      cart: '',
      challengeSets: {/*name, {set}*/},
      selectedChallengeSet: {},
    }
  }

  componentDidMount() {
    //get username via alert
    //get users highscore and use it to determine cart options
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      {/*
      Maybe <WelcomeModal />
      Maybe <LeaderBoardModal />
      <Game />
      */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));