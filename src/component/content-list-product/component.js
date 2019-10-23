import React from 'react';

import { Card, ListItem } from '@material-ui/core';
import ButtonCounter from '../Button-counter';
import Product from '../../data-dummy/product-database';
import { CardMedia, CardContent, Typography, Link } from '@material-ui/core';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {Product.map(item => {
          return (
            <Card className={classes.Card}>
              <ListItem>
                <Link href={'/list/' + item.id}>
                  <CardMedia
                    alt="sayur kol"
                    className={classes.CardMedia}
                    image={item.image}
                  />
                </Link>

                <CardContent className={classes.CardContent}>
                  <Typography>{item.name}</Typography>
                  <Typography>
                    <p /> {item.price}
                  </Typography>
                </CardContent>
              </ListItem>
              <ListItem>
                <ButtonCounter />
              </ListItem>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
}
export default App;
