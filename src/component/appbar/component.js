import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button, Grid, ListItemIcon, Typography } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdminData from '../../data-dummy/admin-database';
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
  state = {
    isLoading: true,
    isLogin: false
  };
  componentDidMount() {
    const checkStatusFromStorage = localStorage.getItem('sudah login');
    if (checkStatusFromStorage === null) {
      this.setState({
        isLogin: false
      });
    } else {
      this.setState({
        isLogin: true
      });
    }
  }
  handlelogout() {
    localStorage.removeItem('sudah login');
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar className={classes.AppBar}>
          <List className={classes.root}>
            <div>
              <CheeseburgerMenu
                backgroundColor="#f44336"
                className={classes.HamburgerMenu}
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}
              >
                <List className={classes.rootList}>
                  {this.state.isLogin === true ? (
                    <ListItem>
                      <Button
                        href="/"
                        variant="contained"
                        className={classes.Button}
                      >
                        {AdminData.map(data => {
                          return (
                            <Typography className={classes.Typography}>
                              {data.account.username}
                            </Typography>
                          );
                        })}
                        <ListItemIcon>
                          <AccountCircleRoundedIcon
                            className={classes.ListItemIcon}
                          />
                        </ListItemIcon>
                      </Button>
                    </ListItem>
                  ) : (
                    <ListItem>
                      <Button
                        href="/login"
                        variant="contained"
                        className={classes.Button}
                      >
                        <Typography className={classes.Typography}>
                          Login
                        </Typography>
                        <ListItemIcon>
                          <AccountCircleSharpIcon
                            className={classes.ListItemIcon}
                          />
                        </ListItemIcon>
                      </Button>
                    </ListItem>
                  )}
                  <ListItem>
                    <Button
                      href="/"
                      variant="contained"
                      className={classes.Button}
                    >
                      <Typography className={classes.Typography}>
                        Back to Home
                      </Typography>
                      <ListItemIcon>
                        <HomeRoundedIcon className={classes.ListItemIcon} />
                      </ListItemIcon>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      href="/list"
                      variant="contained"
                      className={classes.Button}
                    >
                      <Typography className={classes.Typography}>
                        List Product
                      </Typography>
                      <ListItemIcon>
                        <ShoppingCartSharpIcon
                          className={classes.ListItemIcon}
                        />
                      </ListItemIcon>
                    </Button>
                  </ListItem>

                  <ListItem>
                    <Button
                      href="/todolist"
                      variant="contained"
                      className={classes.Button}
                    >
                      <Typography className={classes.Typography}>
                        TodoList
                      </Typography>
                      <ListItemIcon>
                        <PlaylistAddCheckIcon
                          className={classes.ListItemIcon}
                        />
                      </ListItemIcon>
                    </Button>
                  </ListItem>

                  <ListItem>
                    <Button
                      onClick={this.handlelogout}
                      href="/"
                      variant="contained"
                      className={classes.Button}
                    >
                      <Typography className={classes.Typography}>
                        LOGOUT
                      </Typography>
                      <ListItemIcon>
                        <ExitToAppIcon className={classes.ListItemIcon} />
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
