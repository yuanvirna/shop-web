import React from 'react';
import CardTodoList from '../card-todo-list';
import { Grid } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <CardTodoList />
      </Grid>
    );
  }
}
export default App;
