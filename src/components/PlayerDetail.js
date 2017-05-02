import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = props => {
  if (props.selectedPlayer) {
    return(
      <div>
        <ul>
          <li>Name: {props.selectedPlayer.name}</li>
          <li>Score: {props.selectedPlayer.score}</li>
          <li>Created: {props.selectedPlayer.created}</li>
          <li>Updated: {props.selectedPlayer.updated}</li>
        </ul>
      </div>
    )
  }  else {
    return(<p>Click on a player to see more details</p>)
  }
}

PlayerDetail.propTypes = {
  selectedPlayer: PropTypes.object
}

export default PlayerDetail;

