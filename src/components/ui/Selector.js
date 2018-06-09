import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { TextField } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      selected: ''
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ selected: value })
    const position = value / 10 - 1
    let element = undefined
    Object.keys(this.state.data).map((element, index) => {
      if (position === index) {
        element = this.state.data[element]
        this.props.handleUpdateSelector(element)
      }
    })
  }

  render() {
    const { classes } = this.props
    const ambient = this.state.data
    const options = Object.keys(ambient).map((element, key) => (
      <MenuItem key={key} value={(key + 1) * 10}>
        {ambient[element].text}
      </MenuItem>
    ))

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="destination">Destination</InputLabel>
          <Select
            value={this.state.selected}
            onChange={this.handleChange}
            displayEmpty
            name="destination"
            className={classes.selectEmpty}>
            {options}
          </Select>
        </FormControl>
      </form>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleSelect)
