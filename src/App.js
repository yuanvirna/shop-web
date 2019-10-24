import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoList from './container/TodoList';
import CartListProduct from './container/cart-list-product';
import Login from './container/login';
import DetailProduct from './component/detail-product';
import HomePage from './container/HomePage';
import Youtube from './container/Youtube';
class App extends React.Component {
  state = {
    isLoading: true,
    isLogin: false
  };
  componentDidMount() {
    const checkStatusFromStorage = localStorage.getItem('sudah login');
    if (checkStatusFromStorage === null) {
      this.setState({
        isLogin: false
      });
    } else {
      this.setState({
        isLogin: true
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.isLogin === true ? (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/todolist" exact component={TodoList} />
            <Route path="/list" exact component={CartListProduct} />
            <Route path="/list/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={Login} />
            <Route path="/youtube" exact component={Youtube} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/todolist" exact component={TodoList} />
            <Route path="/list" exact component={CartListProduct} />
            <Route path="/list/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={Login} />
            <Route path="/youtube" exact component={Youtube} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
