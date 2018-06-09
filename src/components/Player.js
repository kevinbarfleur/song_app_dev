// React
import React, { Component } from 'react'

// Styles
import '../styles/player.styl'

// UI Components
import ColorButton from './ui/ColorButton'
import Switch from './ui/Switch'

class Player extends Component {
  render() {
    return (
      <div className="wrapper_player">
        <ColorButton
          className="button_player"
          handleClick={this.props.playAmbient}>
          {this.props.buttonText}
        </ColorButton>
        <ColorButton
          className="button_player"
          handleClick={this.props.stopAmbient}>
          Stop
        </ColorButton>

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
          <Switch />
        </div>
      </div>
    )
  }
}

export default Player
