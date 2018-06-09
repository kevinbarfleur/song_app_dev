import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const styles = theme => ({
  colorSwitchBase: {
    color: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)',
    '&$colorChecked': {
      color: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)',
      '& + $colorBar': {
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }
    }
  },
  colorBar: {},
  colorChecked: {}
})

class Switches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const { classes } = this.props

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar
              }}
            />
          }
          label="Custom color"
        />
      </FormGroup>
    )
  }
}

Switches.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Switches)
