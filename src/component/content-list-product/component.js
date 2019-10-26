import React, { Component } from 'react';
import database from '../../data-dummy/database/database';
import CardFood from '../CardFood/';
import { Link } from 'react-router-dom';
// import Navbar from './component/Navbar';
import { Row, Col, Button } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton, Divider } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';

export default class DashFood extends Component {
  componentWillMount() {
    const data = database.find(isi => isi.id);

    const dataFood = data.foods;
    this.setState({
      fillfood: dataFood
    });
    console.log(dataFood);

    const TotalBarang = dataFood.forEach(o => {
      o.jumlahBarangYangDitambahkan = 0;
    });
    console.log(TotalBarang);

    console.log(this.state.fillfood);
  }

  plus = id => {
    const { Order, fillfood } = this.state;
    const fillFoods = fillfood.find(isi => isi.id === id);
    const fillOrder = Order.find(isi => isi.id === id);
    this.addjumlahHargaBarang(fillFoods.harga);
    fillfood.map(o => {
      if (o.id === fillFoods.id) {
        const updateIntern = (o.jumlahBarangYangDitambahkan =
          fillFoods.jumlahBarangYangDitambahkan + 1);
      }
    });
    if (fillOrder === undefined) {
      const update = {
        ...fillFoods,
        jumlahBarangYangDitambahkan: 1,
        jumlahHargaBarang: fillFoods.harga
      };
      this.setState({
        Order: [...Order, update]
      });

      return;
    }
    if (fillFoods.id === fillOrder.id) {
      const update = {
        ...fillOrder,
        jumlahBarangYangDitambahkan: fillOrder.jumlahBarangYangDitambahkan + 1,
        jumlahHargaBarang: fillOrder.jumlahHargaBarang + fillOrder.harga
      };
      this.setState({
        Order: Order.map(o => (o.id === fillOrder.id ? update : o))
      });
      return;
    }
  };

  min = id => {
    const { Order, fillfood } = this.state;
    const fillOrder = Order.find(item => item.id === id);
    const fillFods = fillfood.find(item => item.id === id);
    if (fillFods.jumlahBarangYangDitambahkan === 0) {
      return;
    } else {
      if (fillOrder.jumlahBarangYangDitambahkan === 1) {
        const updateFoods = {
          ...fillFods,
          jumlahBarangYangDitambahkan: fillFods.jumlahBarangYangDitambahkan - 1
        };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = Order.filter(item => item.id !== id);
        this.setState({
          Order: filterOrder
        });
      } else {
        const updateOrders = {
          ...fillOrder,
          jumlahBarangYangDitambahkan:
            fillOrder.jumlahBarangYangDitambahkan - 1,
          jumlahHargaBarang: fillOrder.jumlahHargaBarang - fillOrder.harga
        };
        const updateFoods = {
          ...fillFods,
          jumlahBarangYangDitambahkan: fillFods.jumlahBarangYangDitambahkan - 1
        };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o)),
          Order: Order.map(o => (o.id === fillOrder.id ? updateOrders : o))
        });
      }
    }
    this.minjumlahHargaBarang(fillFods.harga);
  };

  addjumlahHargaBarang = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  minjumlahHargaBarang = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  pay = () => {
    const { Order, total } = this.state;
    sessionStorage.setItem('order', JSON.stringify(Order));
    sessionStorage.setItem('total', JSON.parse(total));
  };

  state = {
    fillfood: [],
    Order: [],
    total: 0
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Navbar name="Go Food" /> */}
        <div style={{ marginTop: 20 }}>
          <Row>
            {this.state.fillfood.map(menu => {
              return (
                <Col sm="4" xl="4">
                  <CardFood
                    name={menu.name}
                    gambar={menu.gambar}
                    harga={menu.harga}
                    jumlahBarangYangDitambahkan={
                      menu.jumlahBarangYangDitambahkan
                    }
                    min={() => this.min(menu.id)}
                    plus={() => this.plus(menu.id)}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <div
          style={{ margin: 20, flexDirection: 'column', alignItems: 'center' }}
        >
          <Grid container spacing={0} className={classes.bottomBox}>
            {/* <Box className={classes.bottomBox}> */}
            <Grid container spacing={0} className={classes.gridItemTop}>
              <Grid item xs={6} className={classes.gridItemLeft}>
                <Typography className={classes.total}>
                  Total Pembayaran
                </Typography>
              </Grid>
              {this.state.Order.map(Orders => (
                <Grid item xs={6} className={classes.gridItemRight}>
                  <Typography className={classes.price}>
                    Rp{Orders.jumlahHargaBarang}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={0} className={classes.gridItemInfo}>
              <Grid item xs={1}>
                <Grid className={classes.icon}>
                  <InfoIcon />
                </Grid>
              </Grid>
              <Grid item xs={11} className={classes.info}>
                <Typography>belum termasuk biaya antar</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={0} className={classes.gridItemTop}>
              <Grid item xs={4}>
                <Typography className={classes.itemRIght}>
                  Kamu Belanja Di:
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <StoreIcon />
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.market}>
                  Pasar Gunung Pati
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs>
                <Box className={classes.buttonBox}>
                  <Button
                    variant="contained"
                    color="secondary"
                    // backgroundColor="#F15B5D"
                    className={classes.button}
                  >
                    Pesan
                  </Button>
                </Box>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Grid>
          <div style={{ margin: 20 }}>
            <Link tag={Link} to="/checkout" onClick={this.pay}>
              <Button color="success">Bayar Sekarang</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
