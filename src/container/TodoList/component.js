import React from 'react';
import AppBar from '../../component/appbar';
import Content from '../../component/content-homePage';
import { Container } from '@material-ui/core';
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
        </Container>
        {/* <SideBar/> */}
      </React.Fragment>
    );
  }
}

export default component;
