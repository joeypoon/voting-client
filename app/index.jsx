import React from 'react';
import ReactDOM from 'react-dom';
import VotingContainer from './containers/VotingContainer';

const pair = ['Dogs', 'Cats'];

ReactDOM.render(
  <VotingContainer pair={pair} hasVoted='Dogs' winner='Dogs' />,
  document.getElementById('app')
);
