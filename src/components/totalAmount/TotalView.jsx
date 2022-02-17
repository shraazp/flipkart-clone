/* eslint-disable react/prop-types */
/**
 * component to get total price of the items in the cart discounts and offers applied
 */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setTotalCost } from '../../actions/cartActions';
import useStyle from './Style';

function TotalView({ cartItems }) {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  const totalAmount = () => {
    let prices = 0; let
      discounts = 0;
    cartItems.map((item) => {
      prices += item.attributes.op * item.attributes.quantity;
      discounts += (item.attributes.op - item.attributes.sp) * item.attributes.quantity;
      return (prices, discounts);
    });
    setPrice(prices);
    setDiscount(Math.abs(discounts));
    dispatch(setTotalCost(prices - discounts));
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
      <div className={classes.image}>
        <img width="100%" src="https://rukminim1.flixcart.com/lockin/736/176/images/promotion_banner_v2_inactive_2.png?q=50" alt="" />
      </div>
      <div className={classes.safeMessageContainer}>
        <div className={classes.safeMessage}>
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </div>
      </div>

    </Box>
  );
}

export default TotalView;
