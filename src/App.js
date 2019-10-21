import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './container/homePage';
import CartListProduct from './container/cart-list-product';
import Login from './container/login';
import DetailProduct from './container/detail-product';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" exact component={CartListProduct} />
        <Route path="/detail-product" exact component={DetailProduct} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}

export default App;
