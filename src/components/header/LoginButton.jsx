/**
 * login button which contains login signUp and different options in dropdown
 * @author:Shravya P
 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import { IoIosArrowDown } from 'react-icons/io';
import DropDown from '../dropDown/DropDown';

const useStyles = makeStyles((theme) => ({
  Login: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  LoginButtons: {
    margin: '0 20px',
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF',
    },
  },
  fullName: {
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    margin: '0 20px',
    cursor: 'pointer',
    fontFamily: 'Roboto,Arial,sans-serif',
    textDecoration: 'none',
  },
}));
function RenderLoggedInMenu() {
  const classes = useStyles();
  return (
    <div className={classes.Login}>
      <DropDown
        menu={
        (
          <a href="/" className={classes.fullName}>
            My Account
            <IoIosArrowDown />
          </a>
        )
      }
        menus={
                [
                  {
                    label: 'My Profile',
                    href: '/',
                    icon: null,
                  },
                  {
                    label: 'SuperCoin Zone',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Flipkart Plus Zone',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Orders',
                    href: '/account/orders',
                    icon: null,
                  },
                  {
                    label: 'Wishlist',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'My Chats',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Coupons',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Rewards',
                    href: '',
                    icon: null,
                  }, {
                    label: 'Notifications',
                    href: '',
                    icon: null,
                  }, {
                    label: 'Gift Cards',
                    href: '',
                    icon: null,
                  }, {
                    label: 'Logout',
                    href: '',
                    icon: null,
                  },
                ]
            }
      />
    </div>
  );
}

function RenderNonLoggedInMenu(setOpenLogin) {
  const classes = useStyles();
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  return (
    <div className={classes.Login}>
      <DropDown
        menu={(
          <Button
            variant="contained"
            className={classes.LoginButtons}
            onClick={() => { handleOpenLogin(); }}
          >
            Login
          </Button>
              )}
        menus={
                [
                  {
                    label: 'My Profile',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Flipkart Plus Zone',
                    href: '',
                    icon: null,
                  },
                  {
                    label: 'Orders',
                    href: '/account/orders',
                    icon: null,
                  },
                  {
                    label: 'Wishlist',
                    href: '',
                    icon: null,
                  }, {
                    label: 'Rewards',
                    href: '',
                    icon: null,
                  }, {
                    label: 'Gift Cards',
                    href: '',
                    icon: null,
                  },
                ]
            }
        firstMenu={(
          <div
            className="firstmenu"
          >
            <span>
              New Customer?
            </span>
            <div
              variant="text"
              style={
{ color: '#2874f0' }
}
            >
              Sign Up
            </div>
          </div>
              )}
      />
    </div>
  );
}
export default function LoginButton({ setOpenLogin, setOpenSignUp }) {
  const loggedIn = useSelector((state) => state.allCategories.isLogin);
  return (loggedIn ? RenderLoggedInMenu() : RenderNonLoggedInMenu(setOpenLogin, setOpenSignUp));
}
