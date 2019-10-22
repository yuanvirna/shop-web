import React from 'react';
import { CardMedia, CardContent, Typography, Link } from '@material-ui/core';

class component extends React.Component {
  render() {
    const { classes, item } = this.props;

    return (
      <React.Fragment>
        <Link href="/detail-product">
          <CardMedia
            alt="sayur kol"
            className={classes.CardMedia}
            image={item.image}
          ></CardMedia>
        </Link>
        <CardContent className={classes.CardContent}>
          <Typography>{item.name}</Typography>
          <Typography>
            <p /> {item.price}
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  }
}
export default component;
