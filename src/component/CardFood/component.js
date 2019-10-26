import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// const styles = {
//   card: {},
//   media: {},
// };

class CardFood extends React.Component {
  constructor(props) {
    super(props);
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
    const { plus, min, harga, qyt, gambar } = this.props;
    const { classes } = this.props;
    const { Hitung } = this.state;
    return (
      <div>
        <Card style={{}}>
          <CardMedia style={{ height: 200, widht: 300 }} image={gambar} />
          <CardContent>
            <Typography style={{ fontWeight: 'bold', fontSize: 20 }}>
              {/* {props.name} */}
            </Typography>
            <Typography component="p" style={{ fontWeight: 'bold' }}>
              Rp {harga}
            </Typography>
            <h3>{qyt}</h3>
          </CardContent>
          <Button color="danger" onClick={plus} className={classes.ButtonPlus}>
            +
          </Button>
          <Typography className={classes.TypographyCounter}>
            {Hitung}
          </Typography>
          <Button color="primary" onClick={min} className={classes.ButtonMinus}>
            -
          </Button>{' '}
        </Card>
      </div>
    );
  }
}

// CardFood.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default CardFood;
