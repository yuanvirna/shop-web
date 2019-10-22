import React from 'react';
import {
  Card,
  ListItem,
  CardMedia,
  Grid,
  Typography,
  Button,
  ButtonGroup
} from '@material-ui/core';
import ButtonCounter from '../card-counter';

class App extends React.Component {
  render() {
    const { classes, item } = this.props;
    return (
      <Card className={classes.Card} maxLenght="1">
        <Grid container spacing={0}>
          <Grid item xs>
            <CardMedia className={classes.CardMedia} image={item.image} />
          </Grid>
          <Grid container spacing={2} className={classes.gridContent}>
            <Grid item xs={6} className={classes.gridItemLeft}>
              <Typography className={classes.title}>{item.name}</Typography>
              <Typography className={classes.unit}>{item.meta_data}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.ButtonCounter}>
              <ButtonCounter />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
export default App;
