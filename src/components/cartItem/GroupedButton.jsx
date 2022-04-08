/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/**
 * component containing buttons to increase and decrease the items in the cart
 */
import React from 'react';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../services/CartService';
import { updateCartQuantity } from '../../actions/cartActions';

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: '50%',
  },
});

function GroupedButton({ item }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleQuantity = (quantity) => {
    updateCart({
      data: {
        quantity,
      },
    }, item.id).then((res) => dispatch(updateCartQuantity(res))).catch();
  };

  return (
    <ButtonGroup className={classes.component}>
      <Button
        id="increase"
        className={classes.button}
        onClick={() => handleQuantity(item.attributes.quantity - 1)}
        disabled={item.attributes.quantity === 1}
      >
        -

      </Button>
      <Button disabled>{item.attributes.quantity}</Button>
      <Button
        id="decrease"
        className={classes.button}
        onClick={() => handleQuantity(item.attributes.quantity + 1)}
      >
        +

      </Button>
    </ButtonGroup>
  );
}

export default GroupedButton;
