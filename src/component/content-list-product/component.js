import React from 'react';
import CardListProduct from '../card-list-product';
import { Card, ListItem } from '@material-ui/core';
import ButtonCounter from '../card-counter';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.Card}>
          <ListItem>
            <CardListProduct />
          </ListItem>
          <ListItem>
            <ButtonCounter />
          </ListItem>
        </Card>
        <Card container className={classes.Card}>
          <ListItem>
            <CardListProduct />
          </ListItem>
          <ListItem>
            <ButtonCounter />
          </ListItem>
        </Card>
      </React.Fragment>
    );
  }
}
export default App;
