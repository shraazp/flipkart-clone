import React from 'react';
import {
  Box, makeStyles, Typography, Button, Grid,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { getAddresss } from '../../services/addressService';
import setAddress from '../../actions/addressActions';

const useStyle = makeStyles((theme) => ({
  cartContainer: {
    backgroundColor: '#f1f3f6',
  },
  component: {
    padding: '8px',
    maxWidth: '1286px',
    margin: '55px auto 0 auto',
    display: 'flex',
  },
  leftComponent: {
    // width: '67%',
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
    },
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  bottom: {
    padding: '16px 22px',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    borderTop: '1px solid #f0f0f0',
  },
  placeOrder: {
    display: 'flex',
    marginLeft: 'auto',
    background: '#fb641b',
    color: '#fff',
    borderRadius: 2,
    width: 250,
    height: 51,
  },
}));

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
