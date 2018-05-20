// React
import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import Logo from './Logo'

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;

  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #424242;

  h1 {
    font-size: 3em;
  }
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Welcome to My Starter App</h1>
        <Logo />
        <p>
          To start working, remove "Logo" in the components folder and remove
          its import in App.js.
        </p>
      </Wrapper>
    )
  }
}

export default App
