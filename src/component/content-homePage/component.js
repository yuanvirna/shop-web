import React from 'react';
import CardTodoList from '../card-todo-list';
import { Grid } from '@material-ui/core';
import CardCounter from '../card-counter';
import CardListProduct from '../card-list-product';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={5} align="center">
          <CardTodoList />
        </Grid>
        <Grid item xs={6} align="center" style={{ marginTop: 200 }}>
          <CardCounter />
        </Grid>
      </Grid>
    );
  }
}
export default App;
