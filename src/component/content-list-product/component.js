import React from 'react';
import CardListProduct from '../card-list-product';
import { Card, ListItem } from '@material-ui/core';
import ButtonCounter from '../card-counter';
import Product from '../../data-dummy/product-database';
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {Product.map(item => {
          return (
            <Card className={classes.Card}>
              <ListItem>
                <CardListProduct item={item} />
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
