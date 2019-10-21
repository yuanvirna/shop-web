import React from 'react';
import Form from '../../component/login';
import Appbar from '../../component/appbar';
import { Container } from '@material-ui/core';
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
        <Appbar />
        <Form />
      </Container>
    );
  }
}

export default component;
