import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../component/appbar';

class component extends React.Component {
  render() {
    return (
      <Container
        style={{
          justifyContent: 'center',
          maxWidth: 448,
          position: 'static'
        }}
      >
        <AppBar />
      </Container>
    );
  }
}

export default component;
