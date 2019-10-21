import React from 'react';
import { Grid, Card, List, CardMedia } from '@material-ui/core';
import ButtonCounter from '../card-counter';
class component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardMedia
          style={{
            // maxWidth: '30px',
            // maxHeight: '20px',
            width: 95,
            height: 80,
            borderRadius: 4
          }}
          image="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/7/6767494/6767494_ae6901af-d2dd-4a7c-be17-e4e80d8d538a_827_573.jpg"
        ></CardMedia>
      </React.Fragment>
    );
  }
}
export default component;
