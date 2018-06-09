import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// We can inject some CSS into the DOM.
const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    margin: '30px'
  }
}

function ColorButton(props) {
  return (
    <Button className={props.classes.button} onClick={props.handleClick}>
      {props.children ? props.children : 'Color Button'}
    </Button>
  )
}

ColorButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ColorButton)
