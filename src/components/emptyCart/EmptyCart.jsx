/**
 * When cart is empty this page is displayed
 */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyle from './Style';

function EmptyCart() {
  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} className={classes.image} alt="empty-cart" />
        <Typography>Your cart is empty!</Typography>
        <span>Add items to it now.</span>
      </Box>
    </Box>
  );
}

export default EmptyCart;
