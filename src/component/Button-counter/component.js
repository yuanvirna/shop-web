import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class component extends React.Component {
  constructor() {
    super();
    this.state = {
      Hitung: 0
    };
  }
  penambahan = () => {
    this.setState({
      Hitung: this.state.Hitung + 1
    });
  };
  pengurangan = () => {
    this.setState(prevState => ({
      Hitung: prevState.Hitung ? prevState.Hitung - 1 : 0
    }));
  };
  render() {
    const { classes } = this.props;
    const { Hitung } = this.state;
    return (
      <React.Fragment>
        <Button
          variant="contained"
          title={'-'}
          onClick={this.pengurangan}
          className={classes.ButtonMinus}
        >
          -
        </Button>

        <Typography className={classes.TypographyCounter}>{Hitung}</Typography>

        <Button
          variant="contained"
          title={'+'}
          onClick={this.penambahan}
          className={classes.ButtonPlus}
        >
          +
        </Button>
      </React.Fragment>
    );
  }
}

export default component;
