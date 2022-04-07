/* eslint-disable react/jsx-no-useless-fragment */
/** Order details page contains delivery address, order details and mode of payment options
 * if success order is placed
 *  @author:Shravya P
 */
import React from 'react';
import {
  Box, Grid,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import TotalView from '../../components/totalAmount/TotalView';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CartItem from '../../components/cartItem/CartItem';
import CaptchaTest from '../../components/captcha/Captcha';
import useStyle from './Styles';
import CustomerAddress from './CustomerAddress';

export default function OrderPage() {
  const classes = useStyle();
  const cartItems = useSelector((state) => state.allCarts.cart);
  return (
    <Box className={classes.cartContainer}>
      <Header />
      <Grid container className={classes.component}>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header}>
              <span className={classes.number}>1</span>
              <div style={{ display: 'inline-block' }}>
                <div className={classes.login}>LOGIN</div>
                <div className={classes.email}>shravyamaradithaya@gmail.com</div>
              </div>
              <button type="button" className={classes.change}>change</button>
            </Box>
          </Grid>
          <CustomerAddress />
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header}>
              <span className={classes.number}>3</span>
              <div className={classes.login}>ORDER SUMMARY</div>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header} style={{ background: '#2874f0' }}>
              <span className={classes.number}>4</span>
              <div className={classes.login} style={{ color: '#fff' }}>PAYMENT OPTIONS</div>
            </Box>
            <div className={classes.codContainer}>
              <div className={classes.cod}>
                Cash On Delivery
              </div>
              <CaptchaTest />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
