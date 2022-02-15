/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import {
  Box, makeStyles, Grid, TextField, Button,
} from '@material-ui/core';
import {
  FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
} from '@mui/material';
import { useSelector } from 'react-redux';
import TotalView from '../cart/TotalView';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from '../../utils/useForm';
import { setAddresss } from '../../services/addressService';
import CartItem from '../cart/CartItem';
import CaptchaTest from '../../components/captcha/CaptchaTest';

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
    paddingRight: 15,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
      width: '100%',
    },
  },
  orderDetails: {
    paddingTop: 15,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
      width: '100%',
    },
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
    display: 'flex',
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
  number: {
    fontSize: '12px',
    color: '#2874f0',
    backgroundColor: '#f0f0f0',
    borderRadius: '2px',
    padding: '3px 7px',
    verticalAlign: 'baseline',
    marginRight: '17px',
    height: '20px',
  },
  login: {
    color: '#878787',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },
  email: {
    fontSize: '14px',
    maxWidth: '630px',
  },
  change: {
    padding: '0 32px',
    height: '40px',
    borderRadius: '2px',
    border: '1px solid #e0e0e0',
    color: '#2874f0',
    fontSize: '14px',
    fontWeight: '500',
    background: '#fff',
    marginLeft: 'auto',
    cursor: 'pointer',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      border: 'none',
    },
  },
  formContainer: {
    padding: '16px 24px 12px',
    backgroundColor: '#f5faff',
    width: '100%',
    margin: 'auto',
  },
  form: {
    marginLeft: '18px',
    width: 'calc(100% - 34px)',
  },
  formInput: {
    height: '50px',
    width: '280px',
    fontSize: '14px',
    border: '1px solid #e0e0e0 ',
    outline: 'none',
    borderRadius: '2px',
    boxShadow: 'none',
    background: '#fff',
  },
  address: {
    height: '50px',
    maxWidth: '710px',
    fontSize: '14px',
    border: '1px solid #e0e0e0 ',
    outline: 'none',
    borderRadius: '2px',
    boxShadow: 'none',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '280px',
    },
  },
  button: {
    height: 48,
    width: 230,
  },
  codContainer: {
    backgroundColor: '#f5faff',
    padding: '16px 25px',
  },
  cod: {
    marginTop: '2px',
    marginLeft: '18px',
    color: '#000',
  },
}));
export default function OrderPage() {
  const classes = useStyle();
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const data = {
    data: {
      name: values.name,
      mobile: values.mobile,
      pincode: values.pincode,
      address: values.address,
      city: values.city,
      state: values.state,
      locality: values.locality,
      landmark: values.landmark,
      alternatePhone: values.alternate,
      type: values.type,
    },
  };
  const handleClick = () => {
    setAddresss(data);
  };
  return (
    <Box className={classes.cartContainer}>
      <Header />
      <Grid container className={classes.component}>
        <>
          <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header}>
              <span className={classes.number}>1</span>
              <div style={{ display: 'inline-block' }}>
                <div className={classes.login}>LOGIN</div>
                <div className={classes.email}>shravyamaradithaya@gmail.com</div>
              </div>
              <button type="button" className={classes.change}>change</button>
            </Box>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header} style={{ background: '#2874f0' }}>
              <span className={classes.number}>2</span>
              <div className={classes.login} style={{ color: '#fff' }}>DELIVERY ADDRESS</div>
            </Box>
            <div className={classes.formContainer}>
              <Grid
                container
                spacing={3}
                className={classes.form}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} required id="name" name="name" label=" name" value={values.name || ''} onChange={handleChange} fullWidth variant="outlined" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} required id="mobile" name="mobile" label="10-digit mobile number" fullWidth variant="outlined" value={values.mobile || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} required id="pincode" name="pincode" label=" pincode" fullWidth variant="outlined" value={values.pincode || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} required id="locality" name="locality" label="locality" fullWidth variant="outlined" value={values.locality || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <TextField InputProps={{ className: classes.address }} id="address" name="address" label="Address (Area and street) " fullWidth variant="outlined" value={values.address || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} required id="city" name="city" label="City/district/town" fullWidth variant="outlined" value={values.city || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} id="state" name="state" label="state" fullWidth variant="outlined" value={values.state || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} id="alternate" name="alternate" label="Alternate Phone(Optional)" fullWidth variant="outlined" value={values.alternate || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField InputProps={{ className: classes.formInput }} id="landmark" name="landmark" label="landmark(optional)" fullWidth variant="outlined" value={values.landmark || ''} onChange={handleChange} />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Address Type</FormLabel>
                    <RadioGroup row aria-label="type" name="type" onChange={handleChange}>
                      <FormControlLabel value="home" control={<Radio />} label="Home (All day delivery)" />
                      <FormControlLabel value="work" control={<Radio />} label="Work (Delivery between 10 AM - 5 PM)" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Button className={classes.button} style={{ background: '#fb641b', color: '#fff' }} variant="contained" onSubmit={handleSubmit} onClick={handleClick}>
                    Save and Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.orderDetails}>
              <Box className={classes.header} style={{ background: '#2874f0' }}>
                <span className={classes.number}>3</span>
                <div className={classes.login} style={{ color: '#fff' }}>ORDER SUMMARY</div>
              </Box>
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.orderDetails}>
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
        </>
      </Grid>
      <Footer />
    </Box>
  );
}
