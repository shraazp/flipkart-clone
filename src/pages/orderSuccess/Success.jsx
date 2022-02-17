/**
 * Page displayed on successful ordering of the product
 */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useStyle from './Styles';

export default function Success() {
  const classes = useStyle();
  const orders = useSelector((state) => state.allOrders.order);
  return (
    <div className={classes.cartContainer}>
      <Header />
      {Object.keys(orders).length > 0 ? (
        <Grid container className={classes.component}>
          <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/orderPlacedV2_cb4f64.png" height="80px" alt="success" />
            <div style={{ marginLeft: '25px' }}>
              <div className={classes.message}>
                Order placed for ₹
                {orders.attributes.cost}
                {' '}
                !
                {' '}
              </div>
              <span style={{ fontSize: '14px' }}>
                Your
                {' '}
                {orders.attributes.quantity}
                {' '}
                item will be delivered by Fri, Feb 18th &apos;22
              </span>
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
              <div className={classes.name}>{orders.attributes.deliveryInfo.name}</div>
              <div className={classes.address}>
                {orders.attributes.deliveryInfo.address}
                ,
                {orders.attributes.deliveryInfo.locality}
                {' '}
                Subdistrict,
                {orders.attributes.deliveryInfo.city}
                {' '}
                District -
                {' '}
                {orders.attributes.deliveryInfo.pincode}
                ,
                {' '}
                {orders.attributes.deliveryInfo.state}
              </div>
              <div style={{ paddingTop: '10px' }}>
                <span className={classes.phone}>Phone Number</span>
                <div className={classes.number}>{orders.attributes.deliveryInfo.mobile}</div>
              </div>
              <span className={classes.orderTrack}>
                This order is also tracked by
                {' '}
                {orders.attributes.deliveryInfo.mobile}
              </span>
            </div>
          </Grid>
        </Grid>
      ) : null }
      <Footer />
    </div>
  );
}
