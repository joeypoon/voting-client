import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

export default class Voting extends React.Component {
  
  render() {
    return(
      <div className="voting">
        {
          this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <Vote {...this.props} />
        }
      </div>
    )
  }
}
