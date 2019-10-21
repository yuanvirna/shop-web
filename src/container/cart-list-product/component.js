import React from 'react';
import AppBar from '../../component/appbar';
import Content from '../../component/content-list-product';
import { Grid, Box, Container } from '@material-ui/core';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container
          style={{
            justifyContent: 'center',
            maxWidth: 448,
            position: 'static'
          }}
        >
          <AppBar />

          <Content />
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
