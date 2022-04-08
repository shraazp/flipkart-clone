/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducer/index';
import OrderPage from './OrderPage';
import TotalView from '../../components/totalAmount/TotalView';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CartItem from '../../components/cartItem/CartItem';
import CustomerAddress from './CustomerAddress';
import CaptchaTest from '../../components/captcha/Captcha';

configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
const item = {
  id: 1,
  attributes: {
    createdAt: '2022-02-23T08:51:44.166Z',
    discount: '89% off',
    email: 'shravyamaradithaya@gmail.com',
    op: 1049,
    productId: '1',
    publishedAt: '2022-02-23T08:51:44.153Z',
    quantity: 1,
    sp: 328,
    title: 'Tokyo Talkies ',
    updatedAt: '2022-02-23T08:51:44.166Z',
    url: 'https://rukminim1.flixcart.com/image/800/960/kwwfte80/top/1/u/k/m-tttp005062-tokyo-talkies-original-imag9h87rkuh2ksx.jpeg?q=50',
  },
};
const cartItems = [item];
describe('order page', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Provider store={createStore(reducers, {})}>
        <OrderPage />
      </Provider>,
    );
  });
  it('renders different components properly', () => {
    expect(component.containsMatchingElement(<Header />));
    expect(component.containsMatchingElement(<CustomerAddress />));
    expect(component.containsMatchingElement(<CartItem item={item} />));
    expect(component.containsMatchingElement(<CaptchaTest />));
    expect(component.containsMatchingElement(<Footer />));
    expect(component.containsMatchingElement(<TotalView cartItems={cartItems} />));
  });
});
