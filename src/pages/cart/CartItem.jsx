/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, makeStyles, Box, Typography, Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import addEllipsis from '../../utils/util';
import GroupButton from './GroupedButton';
import { deleteCart } from '../../services/CartService';
import { deleteCartItem } from '../../actions/cartActions';

const useStyle = makeStyles({
  component: {
    borderTop: '1px solid #f0f0f0',
    borderRadius: 0,
    display: 'flex',
  },
  leftComponent: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: '#878787',
  },
  smallText: {
    fontSize: 14,
  },
  seller: {
    color: '#878787',
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});
function CartItem({ item }) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const removeItemFromCart = (id) => {
    deleteCart(id).then((res) => { dispatch(deleteCartItem(res.id)); }).catch();
  };

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.attributes.url} className={classes.image} alt="product" />
        <GroupButton item={item} />
      </Box>
      <Box className={classes.mid}>
        <Typography>{addEllipsis(item.attributes.title)}</Typography>
        <Typography className={classes.seller} style={{ marginTop: 10 }}>
          Seller:RetailNet
          <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="flipkart-assure" /></span>
        </Typography>
        <Typography style={{ margin: '20px 0' }}>
          <span className={classes.price}>
            ₹
            {item.attributes.sp}
          </span>
&nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor} style={{ textDecoration: 'line-through' }}>
            ₹
            {item.attributes.op}
          </span>
&nbsp;&nbsp;&nbsp;
          <span style={{ color: '#388E3C' }}>
            {item.attributes.discount}
            {' '}
          </span>
        </Typography>
        <Button
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove

        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;
