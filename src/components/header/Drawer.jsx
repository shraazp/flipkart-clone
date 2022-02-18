/**
 * all the header components are in drawer component when mobile devices are used.
 * @author:Shravya P
 */
import React from 'react';
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/logo.png';
import { drawerData } from '../../constants/data';
import useStyles from './Styles';

export default function DrawerStyle() {
  const classes = useStyles();
  const loggedIn = useSelector((state) => state.allCategories.isLogin);
  return (
    <div>
      <AppBar
        position="static"
        className={
                classes.header
        }
      >
        <PersonIcon style={
                { marginLeft: 12 }
            }
        />
        <span className={
                classes.login
            }
        >
          {loggedIn ? ' Welcome' : 'Login & Signup' }
        </span>
        <img
          alt="logo"
          src={logo}
          className={
                    classes.logo
                }
        />
      </AppBar>
      <Box sx={
            {
              margin: 0,
              padding: '8px 0',
              borderBottom: '1px solid #e0e0e0',

            }
        }
      >
        <nav aria-label="main mailbox folders">
          <List className={
                    classes.list
                }
          >
            {
                    drawerData.map((temp) => (
                      <ListItem>
                        <ListItemText primary={temp} />
                      </ListItem>
                    ))
                }
            <Divider />
            <ListItem>Choose Language / भाषा चुनें</ListItem>
            <Divider />
            <ListItem>Offer Zone</ListItem>
            <ListItem>Game Zone</ListItem>
            <Divider />
            <ListItem>My Orders</ListItem>
            <ListItem>My Coupons</ListItem>
            <ListItem>My Cart</ListItem>
            <ListItem>My Wishlist</ListItem>
            <ListItem>My Account</ListItem>
            <Divider />
            <ListItem>Gift Card</ListItem>
            <ListItem>Sell On Flipkart</ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
}
