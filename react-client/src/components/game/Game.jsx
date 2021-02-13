import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      cart: '',
      challengeSet: {},
      translationRate: 0,
      currentPlatform: 0,
      currentTranslation: 0
    }
  }
