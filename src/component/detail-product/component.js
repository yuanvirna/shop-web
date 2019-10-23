import React from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import ButtonCounter from '../Button-counter';
import ProductDetail from '../../data-dummy/product-database';
import AppBar from '../../component/appbar';

class App extends React.Component {
  render() {
    const itemID = this.props.match.params.id;
    console.log(itemID);
    const filtered = ProductDetail.find(detail => detail.id == itemID);
    console.log(filtered);

    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container
          style={{
            justifyContent: 'center',
            maxWidth: 448,
            position: 'static'
            // width: '300px'
          }}
        >
          <AppBar />
          <Card className={classes.Card} maxLenght="1">
            <Grid container spacing={0}>
              <Grid item xs>
                <CardMedia
                  className={classes.CardMedia}
                  image={filtered.image}
                />
              </Grid>
              <Grid container spacing={2} className={classes.gridContent}>
                <Grid item xs={6} className={classes.gridItemLeft}>
                  <Typography className={classes.title}>
                    {filtered.name}
                  </Typography>
                  <Typography className={classes.unit}>
                    {filtered.meta_data}
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.GridButtonCounter}>
                  <ButtonCounter />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                className={classes.gridContentDescription}
              >
                <Grid item xs={0} className={classes.gridItemLeft}>
                  <Typography className={classes.description}>
                    {filtered.desc}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
export default App;
