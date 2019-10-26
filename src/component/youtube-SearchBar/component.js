import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
class component extends React.Component {
  state = {
    term: ''
  };
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper style={{ width: 275, margin: 'auto', marginTop: 40 }}>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <InputBase
            onChange={this.handleChange}
            name="video-search"
            type="text"
            value={this.state.term}
            className={classes.InputBase}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.handleSubmit}>
                  <SearchIcon style={{}} />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
      </Paper>
    );
  }
}
export default component;
