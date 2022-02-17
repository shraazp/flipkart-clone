/**
 * Cart page to display all the items in the cart
 */
import React from 'react';
import {
  Box, Typography, Button, Grid,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/cartItem/CartItem';
import TotalView from '../../components/totalAmount/TotalView';
import EmptyCart from '../../components/emptyCart/EmptyCart';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { getAddresss } from '../../services/addressService';
import setAddress from '../../actions/addressActions';
import useStyle from './Style';

function Cart() {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const handleCart = () => {
    getAddresss().then((res) => { dispatch(setAddress(res)); });
  };
  return (
    <Box className={classes.cartContainer}>
      <Header />
      { Object.keys(cartItems).length !== 0 ? (
        <Grid container className={classes.component}>
          <>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
              <Box className={classes.header}>
                <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                  My Cart (
                  {cartItems.length}
                  )
                </Typography>
              </Box>
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
              <Box className={classes.bottom}>
                <Button variant="contained" className={classes.placeOrder} onClick={() => { handleCart(); navigate('/orderPage/'); }}>Place Order</Button>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={cartItems} />
            </Grid>

          </>
        </Grid>
      ) : <EmptyCart /> }
      <Footer />
    </Box>
  );
}

export default Cart;
