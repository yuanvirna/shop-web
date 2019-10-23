import React from 'react';
import CardListProduct from '../card-list-product';
import { Card, ListItem } from '@material-ui/core';
import ButtonCounter from '../Button-counter';
import Product from '../../data-dummy/product-database';
import { CardMedia, CardContent, Typography, Link } from '@material-ui/core';
// import Link from 'react-router-dom';
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
}
class App extends React.Component {
  render() {
    // let { id } = useParams();

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
