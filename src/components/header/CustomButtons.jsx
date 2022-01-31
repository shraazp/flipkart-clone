import React from 'react';
import { Badge} from '@material-ui/core';
import { IoIosArrowDown } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DropDown from '../dropDown/DropDown';

const useStyles = makeStyles(() => ({
  MoreContainer: {
    margin: '0 20px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    maxWidth: 150,
    fontFamily: 'Roboto,Arial,sans-serif',
  },
  MoreButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: '100%',
    fontSize: 16,
    letterSpacing: '.1',
    fontWeight: 500,
    color: '#fff',
    textTransform: 'none',
    lineHeight: '20px',
    userSelect: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 108,
  },
  dropdownContainer: {
    padding: 16,
  },
  dropDown: {
    margin: -16,
    width: 240,
    height: 254,
    maxWidth: '100%',
    position: 'absolute',
    top: '55px',
  },
  listItem: {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: 18,
    fontWeight: 400,
    color: '#212121',
  },
  cartContainer: {
    margin: '0 20px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    maxWidth: 150,
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '20px',
    fontSize: 16,
    letterSpacing: '.1',
    fontWeight: 500,
    color: '#fff',
    position: 'relative',
    textDecoration: 'none',
    fontFamily: 'Roboto,Arial,sans-serif',
  },
}));

export default function CustomButtons() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.MoreContainer}>
        <DropDown 
        menu={
                    <span
                className="more"><span>More</span><IoIosArrowDown/></span>
                }
                menus={
                    [
                        {
                            label: "Notification Preference",
                            href: "",
                            icon: <NotificationsIcon color="primary"/>
                        },
                        {
                            label: "Sell on flipkart",
                            href: "",
                            icon: <BusinessCenterIcon color="primary"/>
                        },
                        {
                            label: "24x7 Customer Care",
                            href: "",
                            icon: <LiveHelpIcon color="primary"/>
                        },
                        {
                            label: "Advertise",
                            href: "",
                            icon: <TrendingUpIcon color="primary"/>
                        }, {
                            label: "Download App",
                            href: "",
                            icon: <DownloadIcon color="primary"/>
                        },
                    ]
                }/>
        </div>
        <div className={
            classes.cartContainer
        }>

            <a href='/cart'
                className={
                    classes.cart
            }>
                <Badge badgeContent={2}
                    color="secondary"
                    style={
                        {margin: "0 8px"}
                }>
                    <ShoppingCartIcon fontSize='small'/>
                </Badge>
                <span>Cart</span>
            </a>
        </div>
    </>
  );
}
