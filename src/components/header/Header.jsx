/**
 * Header component contains logo, search button , login and more components also cart button
 * @author:Shravya P
 */
import React, { useState } from 'react';
import { Menu } from '@material-ui/icons';
import {
  AppBar, Toolbar, Box, Typography, IconButton, Drawer, List,
} from '@material-ui/core';
import flipkart from '../../images/flipkart.png';
import plus from '../../images/plus.png';
import Search from './Search';
import CustomButtons from './CustomButtons';
import LoginButton from './LoginButton';
import DrawerStyle from './Drawer';
import Login from '../dialog/Login';
import SignUp from '../dialog/SignUp';
import useStyles from './Styles';

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUpup, setOpenSignUp] = useState(false);
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
          <DrawerStyle />
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
            alt=""
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
              alt=""
              src={plus}
              className={
                                classes.subURL
                            }
            />
          </Box>
        </a>
        <Search className={classes.searchWrapper} />
        <LoginButton setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
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
      </Toolbar>
    </AppBar>
  );
}
