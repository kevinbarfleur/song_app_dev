// Songs
import orage from './music/orage.mp3'
import vagues from './music/vagues.mp3'
import piano from './music/piano.mp3'

const data = {
  ambient: {
    orage: {
      name: 'orage',
      text: 'Orage dans les Mamelle',
      audio: new Audio(orage)
    },
    vagues: {
      name: 'vagues',
      text: 'Plage de la Perle',
      audio: new Audio(vagues)
    }
  },
  sounds: {
    piano: {
      name: 'piano',
      text: 'Piano',
      audio: new Audio(piano),
      playing: false
    }
  }
}

export default data
