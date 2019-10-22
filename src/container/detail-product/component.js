import React from 'react';
import Appbar from '../../component/appbar';
import { Container } from '@material-ui/core';
import DetailProduct from '../../component/detail-product';
import ProductData from '../../data-dummy/product-database';

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
        {ProductData.map(item => {
          return <DetailProduct item={item} />;
        })}
      </Container>
    );
  }
}

export default component;
