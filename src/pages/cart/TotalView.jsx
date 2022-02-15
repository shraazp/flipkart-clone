/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  component: {
    width: '100%',
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  greyTextColor: {
    color: '#878787',
  },
  container: {
    '& > *': {
      padding: '15px 24px',
      background: '#fff',
      fontSize: 14,
    },
  },
  price: {
    float: 'right',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 600,
    borderTop: '1px dashed #e0e0e0',
    padding: '20px 2px',
    borderBottom: '1px dashed #e0e0e0',
  },
  safeMessageContainer: {
    margin: '4px 15px 8px',
    textAlign: 'center',
  },
  safeMessage: {
    fontSize: '14px',
    textAlign: 'left',
    display: 'inline-block',
    color: '#878787',
    padding: '5px 0 5px 35px',
    background: 'url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg) no-repeat 0 50%',
    backgroundSize: '25px 31px',
    fontWeight: '500',
  },
});

function TotalView({ cartItems }) {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let prices = 0; let
      discounts = 0;
    cartItems.map((item) => {
      prices += item.attributes.op;
      discounts += (item.attributes.op - item.attributes.sp);
      return (prices, discounts);
    });
    setPrice(prices);
    setDiscount(Math.abs(discounts));
  };
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header} style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price (
          {cartItems?.length}
          {' '}
          item)
          <span className={classes.price}>
            ₹
            {price}
          </span>
        </Typography>
        <Typography>
          Discount
          <span className={classes.price}>
            -₹
            {discount}
          </span>
        </Typography>
        <Typography>
          Delivery Charges
          <span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          &nbsp;&nbsp;Total Amount
          <span className={classes.price}>
            ₹
            {price - discount + 40}
&nbsp;&nbsp;
          </span>
        </Typography>
        <Typography style={{ fontSize: 16, color: 'green' }}>
          You will save ₹
          {discount - 40}
          {' '}
          on this order
        </Typography>
      </Box>
      <div className={classes.safeMessageContainer}>
        <div className={classes.safeMessage}>
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </div>
      </div>

    </Box>
  );
}

export default TotalView;
