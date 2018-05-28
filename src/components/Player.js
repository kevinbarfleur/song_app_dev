// React
import React, { Component } from 'react'

// Styles
import '../styles/player.styl'

class Player extends Component {
  render() {
    return (
      <div className="wrapper_player">
        <button className="element" onClick={this.props.playAmbient}>
          {this.props.buttonText}
        </button>
        <button className="element" onClick={this.props.stopAmbient}>
          Stop
        </button>
        <label className="element">
          <input
            ref="piano_checkbox"
            type="checkbox"
            name="checkbox"
            value="value"
            onChange={() => this.props.pianoHandler(this.refs.piano_checkbox)}
          />Piano
        </label>
      </div>
    )
  }
}

export default Player
