/**
 * Header component contains logo, search button , login and more components also cart button
 * @author:Shravya P
 */
import React from 'react';
import { Menu } from '@material-ui/icons';
import {
  AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import flipkart from '../../images/flipkart.png';
import plus from '../../images/plus.png';
import Search from './Search';
import CustomButtons from './CustomButtons';
import LoginButton from './LoginButton';
import DrawerStyle from './Drawer';
import Login from '../dialog/Login';
import SignUp from '../dialog/SignUp';
import useStyles from './Styles';

import { removeUserSession } from '../../utils/Common';
import { loginStatus } from '../../actions/categoryActions';

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignUpup, setOpenSignUp] = React.useState(false);
  const loggedIn = useSelector((state) => state.allCategories.isLogin);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box sx={{ width: '75%' }} className={classes.listMain} onClick={handleClose}>
      <List>
        <listItem button>
          <DrawerStyle setOpenLogin={setOpenLogin} />
        </listItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      className={
                classes.headerMain
        }
    >
      <Toolbar className={
                classes.toolbar
            }
      >
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>

        <Drawer sx={{ width: '75%' }} open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <a
          href="/"
          className={
                        classes.component
                }
        >
          <img
            alt="flipkart-logo"
            src={flipkart}
            className={
                            classes.logoMain
                        }
          />
          <Box
            component="span"
            className={
                            classes.container
                    }
          >
            <Typography className={
                            classes.subHeading
                        }
            >
              Explore
              <Box
                component="span"
                style={
                                    {
                                      color: '#FFE500',
                                      fontSize: '11px',
                                      fontWeight: 500,
                                      margin: '0 2px 0 2px',
                                      fontStyle: 'italic',
                                    }
                            }
              >
                Plus

              </Box>
            </Typography>
            <img
              alt="flipkart-plus"
              src={plus}
              className={
                                classes.subURL
                            }
            />
          </Box>
        </a>
        <Search className={classes.searchWrapper} />
        <LoginButton
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
        />
        <CustomButtons className={classes.customButtons} />
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
        />
        <SignUp
          openSignUp={openSignUpup}
          setOpenSignUp={setOpenSignUp}
          setOpenLogin={setOpenLogin}
        />
        <div className={classes.cartLogin}>
          <ShoppingCartIcon className={classes.cartIcon} onClick={() => navigate('/cart')} />
          {loggedIn ? (
            <LogoutIcon
              className={classes.cartIcon}
              onClick={() => {
                removeUserSession();
                dispatch(loginStatus(false));
              }}
            />
          ) : <Button aria-label="login-button" variant="text" className={classes.LoginButton} onClick={() => { setOpenLogin(true); }}>LOGIN</Button>}
        </div>
      </Toolbar>
    </AppBar>
  );
}
