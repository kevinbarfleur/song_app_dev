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
        <div className="container_piano">
          <label className="element">
            <input
              ref="piano_checkbox"
              type="checkbox"
              name="checkbox"
              value="value"
              onChange={() =>
                this.props.handlePiano(
                  this.refs.piano_checkbox,
                  this.refs.piano_volume
                )
              }
            />Piano
          </label>
          <input
            ref="piano_volume"
            type="range"
            min="1"
            max="100"
            className="slider_volume"
            id="myRange"
            onChange={() =>
              this.props.handlePianoVolume(this.refs.piano_volume)
            }
          />
        </div>
      </div>
    )
  }
}

export default Player
