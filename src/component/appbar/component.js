import React, { Component } from 'react';
import { render } from 'react-dom';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
// import MenuContent from './menuContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {
  Button,
  Card,
  Grid,
  ListItemIcon,
  Container,
  Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar className={classes.AppBar}>
          <List className={classes.root}>
            <div>
              <CheeseburgerMenu
                backgroundColor="#ff5722"
                className={classes.HamburgerMenu}
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}
              >
                <List className={classes.rootList}>
                  <ListItem>
                    <Button
                      variant="contained"
                      className={classes.rootListItem}
                    >
                      <ListItemIcon>
                        Login
                        <AccountCircleSharpIcon
                          className={classes.ListItemIcon}
                        />
                      </ListItemIcon>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      href="/list"
                      variant="contained"
                      className={classes.rootListItem}
                    >
                      <ListItemIcon>
                        List Product
                        <ShoppingCartSharpIcon
                          className={classes.ListItemIcon}
                        />
                      </ListItemIcon>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      className={classes.rootListItem}
                    >
                      <ListItemIcon>
                        Login
                        <AccountCircleSharpIcon
                          className={classes.ListItemIcon}
                        />
                      </ListItemIcon>
                    </Button>
                  </ListItem>
                </List>
              </CheeseburgerMenu>
            </div>
            <div className={classes.AppBar}>
              <Grid container spacing={2}>
                <Grid item xs={4} className={classes.HamburgerMenu}>
                  <HamburgerMenu
                    className={classes.HamburgerMenu}
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}
                  />
                </Grid>
                <Grid item xs={0} className={classes.AppBarTitle}>
                  <ShoppingCartOutlinedIcon />
                  Shopping Cart
                </Grid>
              </Grid>
            </div>
          </List>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default App;
