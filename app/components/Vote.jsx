import React from 'react';

export default class Vote extends React.Component {

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted
  }

  hasVotedFor(entry) {
    return entry === this.props.hasVoted
  }

  render() {
    return(
      <div className="vote">
        {
          this.getPair().map(entry =>
            <button key={entry}
                    onClick={ () => this.props.vote(entry) }
                    disabled={ this.isDisabled() }>
              <h1>{entry}</h1>
              {
                this.hasVotedFor(entry) ?
                  <div className="label">Voted</div> :
                  null
              }
            </button>
          )
        }
      </div>
    )
  }
}
