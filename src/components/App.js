// React
import React, { Component } from 'react'

// Styles
import '../styles/app.styl'

// Components
import Selector from './Selector'
import Player from './Player'

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

  pianoHandler = piano_refs => {
    if (piano_refs.checked === true) {
      const audio = this.state.sounds.piano.audio
      audio.play()
    } else if (piano_refs.checked === false) {
      const audio = this.state.sounds.piano.audio
      audio.pause()
      audio.currentTime = 0
    }
  }

  render() {
    const ambient = this.state.ambient
    const options = Object.keys(ambient).map((element, key) => (
      <option key={key}>{ambient[element].text}</option>
    ))

    return (
      <div className="wrapper">
        <h1 className="title">Prototype App</h1>
        <Selector data={this.state.ambient} />
        <Player
          playAmbient={this.playAmbient}
          stopAmbient={this.stopAmbient}
          buttonText={this.state.playing.html}
          pianoHandler={this.pianoHandler}
        />
      </div>
    )
  }
}

export default App
