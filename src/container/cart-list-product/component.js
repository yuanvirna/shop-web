import React from 'react';
import AppBar from '../../component/appbar';
import Content from '../../component/content-list-product';
import { Container, Grid } from '@material-ui/core';
import BottomSheet from '../../component/card-total-product';
class component extends React.Component {
  render() {
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
          {/* <Grid container spacing={0}>
            <BottomSheet />
          </Grid> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
