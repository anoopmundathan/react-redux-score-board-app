
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import PropTypes from 'prop-types';

import Stopwatch from '../components/Stopwatch';
import Stats from '../components/Stats';
import Counter from '../components/Counter';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';
import PlayerDetail from '../components/PlayerDetail';

class ScoreBoard extends Component {

  render() {
    const { dispatch, players, selectedPlayerIndex } = this.props;
  
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    let selectedPlayer;
    if (selectedPlayerIndex != -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }
  
    const playerComponents = players.map((player, index) => (
      <Player 
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <PlayerDetail selectedPlayer={selectedPlayer}/>
      </div>
    );
  }
}

// PropTypes
ScoreBoard.propTypes = {
  players: PropTypes.array.isRequired
}

// Convert state into Props
const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(ScoreBoard);