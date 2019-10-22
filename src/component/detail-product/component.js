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
    const { classes, detail } = this.props;
    return (
      <Card className={classes.Card}>
        <Grid container spacing={0}>
          <Grid item xs>
            <CardMedia className={classes.CardMedia} image={detail.image} />
          </Grid>
          <Grid container spacing={2} className={classes.gridContent}>
            <Grid item xs={6} className={classes.gridItemLeft}>
              <Typography className={classes.title}>{detail.name}</Typography>
              <Typography className={classes.unit}>
                {detail.meta_data}
              </Typography>
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
