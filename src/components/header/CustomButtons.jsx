/**
 * more component and cart button present in the header of the application
 * @author:Shravya P
 */
import React from 'react';
import { Badge, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import useStyles from './Styles';

export default function CustomButtons() {
  const classes = useStyles();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.allCarts.cart);
  return (
    <>
      <div className={
                classes.MoreContainer
            }
      >
        <DropDown
          menu={(
            <span
              className={classes.MoreButton}
            >
              <span>More</span>
              <IoIosArrowDown />
            </span>
                )}
          menus={
                    [
                      {
                        label: 'Notification Preference',
                        href: '',
                        icon: <NotificationsIcon color="primary" />,
                      },
                      {
                        label: 'Sell on flipkart',
                        href: '',
                        icon: <BusinessCenterIcon color="primary" />,
                      },
                      {
                        label: '24x7 Customer Care',
                        href: '',
                        icon: <LiveHelpIcon color="primary" />,
                      },
                      {
                        label: 'Advertise',
                        href: '',
                        icon: <TrendingUpIcon color="primary" />,
                      }, {
                        label: 'Download App',
                        href: '',
                        icon: <DownloadIcon color="primary" />,
                      },
                    ]
                    }
        />
      </div>
      <Button
        variant="text"
        className={
                classes.cartContainer
            }
        onClick={() => navigate('/cart')}
      >
        <div className={
                        classes.cart
                }
        >
          <Badge
            badgeContent={cartItems.length || 0}
            color="secondary"
            className={classes.badge}
          >
            <ShoppingCartIcon fontSize="small" />
          </Badge>
          <span>Cart</span>
        </div>
      </Button>
    </>
  );
}
