import React from 'react';
import Appbar from '../../component/appbar';
import { Container } from '@material-ui/core';
import DetailProduct from '../../component/detail-product';
import Product from '../../data-dummy/product-database';
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
        {Product.map(detail => {
          return <DetailProduct detail={detail} />;
        })}
      </Container>
    );
  }
}

export default component;
