import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton, Divider, Button } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';
class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} className={classes.bottomBox}>
        {/* <Box className={classes.bottomBox}> */}
        <Grid container spacing={0} className={classes.gridItemTop}>
          <Grid item xs={6} className={classes.gridItemLeft}>
            <Typography className={classes.total}>Total Pembayaran</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridItemRight}>
            <Typography className={classes.price}>Rp 45.000</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridItemInfo}>
          <Grid item xs={1}>
            <Grid className={classes.icon}>
              <InfoIcon />
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.info}>
            <Typography>belum termasuk biaya antar</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} className={classes.gridItemTop}>
          <Grid item xs={4}>
            <Typography className={classes.itemRIght}>
              Kamu Belanja Di:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <StoreIcon />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.market}>
              Pasar Gunung Pati
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs>
            <Box className={classes.buttonBox}>
              <Button
                variant="contained"
                color="secondary"
                // backgroundColor="#F15B5D"
                className={classes.button}
              >
                Pesan
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Grid>
    );
  }
}

export default Component;
