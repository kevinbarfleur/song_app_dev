// React
import React, { Component } from 'react'

// Styles
import '../styles/selector.styl'

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
  }

  render() {
    const ambient = this.state
    const options = Object.keys(ambient).map((element, key) => (
      <option key={key}>{ambient[element].text}</option>
    ))

    return (
      <div className="wrapper_selector">
        <form>
          <select name="selector">{options}</select>
        </form>
      </div>
    )
  }
}

export default Selector
