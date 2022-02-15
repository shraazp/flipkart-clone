import React, { useState, useEffect } from 'react';
import {
  loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha,
} from 'react-simple-captcha';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../services/CartService';
import './styles.scss';

function CaptchaTest() {
  const cartItems = useSelector((state) => state.allCarts.cart);
  const address = useSelector((state) => state.allAddress.address);
  console.log(address[0].attributes);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  });
  const EmptyCart = () => (cartItems.map((item) => deleteCart(item.id)));
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
