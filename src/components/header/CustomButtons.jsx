/**
 * more component and cart button
 * @author:Shravya P
 */
import React from 'react';
import { Badge } from '@material-ui/core';
import { IoIosArrowDown } from 'react-icons/io';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DropDown from '../dropDown/DropDown';
import useStyles from './Styles';

export default function CustomButtons() {
  const classes = useStyles();
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
      <div className={
                classes.cartContainer
            }
      >
        <a
          href="/cart"
          className={
                        classes.cart
                }
        >
          <Badge
            badgeContent={2}
            color="secondary"
            style={
                            { margin: '0 8px' }
                    }
          >
            <ShoppingCartIcon fontSize="small" />
          </Badge>
          <span>Cart</span>
        </a>
      </div>
    </>
  );
}
