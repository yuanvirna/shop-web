import React from 'react';
import Button from '@material-ui/core/Button';

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
    this.setState({
      Hitung: this.state.Hitung - 1
    });
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

        <h2 style={{ marginLeft: 10, marginRight: 10 }}> {Hitung}</h2>

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
