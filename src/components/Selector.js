// React
import React, { Component } from 'react'

// Styles
import '../styles/selector.styl'

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
  }

  handleSelector = () => {
    const value = this.refs.selector.value
    this.props.handleUpdateSelector(value)
  }

  render() {
    const ambient = this.state
    const options = Object.keys(ambient).map((element, key) => (
      <option key={key}>{ambient[element].text}</option>
    ))

    return (
      <div className="wrapper_selector">
        <form>
          <select name="selector" ref="selector" onChange={this.handleSelector}>
            {options}
          </select>
        </form>
      </div>
    )
  }
}

export default Selector
