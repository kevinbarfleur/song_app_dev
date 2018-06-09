// React
import React, { Component } from 'react'

// Styles
import '../styles/app.styl'

// Components
import Player from './Player'
import Background from './Background'

// UI Components
import ColorButton from './ui/ColorButton'
import Selector from './ui/Selector'

// Data
import data from '../data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ambient: data.ambient,
      sounds: data.sounds,

      current: data.ambient.orage,

      playing: {
        status: false,
        html: 'Play'
      }
    }
  }

  // Launch and Pause Ambient melody
  playAmbient = () => {
    if (this.state.playing.status === false) {
      const audio = this.state.current.audio
      audio.loop = true
      audio.play()

      this.setState({
        playing: {
          status: true,
          html: 'Pause'
        }
      })
    } else if (this.state.playing.status === true) {
      const audio = this.state.current.audio
      audio.pause()

      this.setState({
        playing: {
          status: false,
          html: 'Play'
        }
      })
    }
  }

  // Stop and reset Ambient melody
  stopAmbient = () => {
    const audio = this.state.current.audio
    audio.pause()
    audio.currentTime = 0

    this.setState({
      playing: {
        status: false,
        html: 'Play'
      }
    })
  }

  // Check checkbox for piano melody and set volume
  handlePiano = (piano_refs, piano_volume_refs) => {
    if (piano_refs.checked === true) {
      const audio = this.state.sounds.piano.audio
      const volume = piano_volume_refs.value / 100
      audio.volume = volume
      audio.play()
    } else if (piano_refs.checked === false) {
      const audio = this.state.sounds.piano.audio
      audio.pause()
      audio.currentTime = 0
    }
  }

  handlePianoVolume = piano_volume_refs => {
    const volume = piano_volume_refs.value / 100
    const audio = this.state.sounds.piano.audio

    audio.volume = volume
  }

  // Update current ambient sound on selector change
  handleUpdateSelector = element => {
    this.stopAmbient()
    this.setState({
      current: element
    })
  }

  render() {
    const ambient = this.state.ambient
    const options = Object.keys(ambient).map((element, key) => (
      <option key={key}>{ambient[element].text}</option>
    ))

    return (
      <div className="wrapper">
        <Background />
        <h1 className="title">Prototype App</h1>
        <div className="selector_player_wrapper">
          <Selector
            data={this.state.ambient}
            handleUpdateSelector={this.handleUpdateSelector}
          />
          <Player
            playAmbient={this.playAmbient}
            stopAmbient={this.stopAmbient}
            buttonText={this.state.playing.html}
            handlePiano={this.handlePiano}
            handlePianoVolume={this.handlePianoVolume}
          />
        </div>
      </div>
    )
  }
}

export default App
