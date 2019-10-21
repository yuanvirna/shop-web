import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './container/homePage';
import CartListProduct from './container/cart-list-product';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" exact component={CartListProduct} />
      </Switch>
    );
  }
}

export default App;
