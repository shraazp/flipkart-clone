import React from 'react';
import {
  makeStyles, Grid,
} from '@material-ui/core';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const useStyle = makeStyles((theme) => ({
  cartContainer: {
    backgroundColor: '#f1f3f6',
  },
  component: {
    marginTop: '55px',
    position: 'relative',
    padding: '14px 80px 0',
  },
  leftComponent: {
    backgroundColor: '#fff',
    borderRadius: '2px',
    display: 'flex',
    padding: '10px 24px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
    },
  },
  message: {
    color: '#2874f0',
    fontSize: '24px',
  },
  rightComponent: {
    backgroundColor: '#fff',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 0 0 20px',
    borderLeft: '1px solid #f0f0f0',
  },
  contact: {
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '2px',
  },
  order: {
    display: 'inline-block',
    borderRadius: '3px',
    backgroundColor: '#2874f0',
    color: '#fff',
    height: '30px',
    minWidth: '120px',
    textAlign: 'center',
    lineHeight: '30px',
    margin: '16px 0',
  },
  contactImage: {
    height: 'auto',
    width: '70px',
    marginRight: '20px',
  },
  title: {
    paddingBottom: '8px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  address: {
    paddingTop: '10px',
    width: '75%',
    fontSize: '14px',
    lineHeight: 1.4,
  },
  phone: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.4,
  },
  number: {
    paddingLeft: '10px',
    display: 'inline',
    fontSize: '14px',
    lineHeight: 1.4,
  },
  orderTrack: {
    display: 'block',
    marginTop: '25px',
    wordBreak: 'break-word',
    fontSize: '14px',
    lineHeight: 1.4,
  },
}));
export default function Success() {
  const classes = useStyle();
  return (
    <div className={classes.cartContainer}>
      <Header />
      <Grid container className={classes.component}>
        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/orderPlacedV2_cb4f64.png" height="80px" alt="success" />
          <div style={{ marginLeft: '25px' }}>
            <div className={classes.message}>Order placed for ₹188 ! </div>
            <span style={{ fontSize: '14px' }}>Your 1 item will be delivered by Fri, Feb 18th &apos;22</span>
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.rightComponent}>
          <div>
            <div className={classes.contact}>Why call? Just click!</div>
            <div style={{ fontSize: '14px' }}>Easily track all your Flipkart orders!</div>
            <a className={classes.order} href="/">Go to Orders</a>
          </div>
          <img src="https://img1a.flixcart.com/www/helpcenter/assets/images/1529927950114/group-2%403x.png" className={classes.contactImage} alt="contact" />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.leftComponent}
          style={{ marginTop: 24 }}
        >
          <div style={{ padding: '24px' }}>
            <div className={classes.title}>Delivery Address</div>
            <div className={classes.name}>Dinesh Maradithaya</div>
            <div className={classes.address}>
              1-67 gummattegadde house Bettampady, Puttur Subdistrict,
              Dakshina Kannada District - 574259, Karnataka
            </div>
            <div style={{ paddingTop: '10px' }}>
              <span className={classes.phone}>Phone Number</span>
              <div className={classes.number}>990194739</div>
            </div>
            <span className={classes.orderTrack}>This order is also tracked by 9902194739</span>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
