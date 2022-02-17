/**
 * component for getting captcha verification which is to be done before placing the order
 */
import React, { useState, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../services/CartService';
import setOrders from '../../actions/orderActions';
import { setOrder } from '../../services/orderService';
import { emptyCart } from '../../actions/cartActions';
import './styles.scss';

function CaptchaTest() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.allCarts.cart);
  const totalCost = useSelector((state) => state.allCarts.totalCost);
  const address = useSelector((state) => state.allAddress.address);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  });
  const EmptyCart = () => {
    const data = {
      data: {
        cost: totalCost,
        quantity: cartItems.length,
        productDetails: { cart: cartItems },
        deliveryInfo: address[0].attributes,
      },
    };
    cartItems.map((item) => deleteCart(item.id));
    setOrder(data).then((res) => dispatch(setOrders(res)));
    dispatch(emptyCart());
  };
  const doSubmit = () => {
    const userCaptcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(userCaptcha) === true) {
      EmptyCart();
      navigate('/success');
    } else {
      setIncorrect(true);
      document.getElementById('user_captcha_input').value = '';
    }
  };
  return (
    <div>
      <div className="container">
        {incorrect ? (
          <div className="incorrect">
            <span className="incorrect-text">!</span>
            Incorrect text entered. Please try again.
          </div>
        )
          : null}
        <div className="form-group">
          <div className="input">
            <LoadCanvasTemplateNoReload />
          </div>

          <div className="input-text">
            <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" /></div>
          </div>

          <div className="input-btn">
            <div><button type="button" className="btn-primary" onClick={() => doSubmit()}>CONFIRM ORDER</button></div>
          </div>

        </div>

      </div>
    </div>
  );
}
export default CaptchaTest;
