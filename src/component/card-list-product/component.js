import React from 'react';
import { CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import Products from '../../data-dummy/product-database';
class component extends React.Component {
  render() {
    // const { classes } = this.props;
    const { classes, cart } = this.props;

    return (
      <React.Fragment>
        <Link href="/detail-product">
          <CardMedia
            alt="sayur kol"
            className={classes.CardMedia}
            image="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/7/6767494/6767494_ae6901af-d2dd-4a7c-be17-e4e80d8d538a_827_573.jpg"
          ></CardMedia>
        </Link>
        <CardContent className={classes.CardContent}>
          <Typography>
            <p /> Rp 15.000/kg
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  }
}
export default component;
