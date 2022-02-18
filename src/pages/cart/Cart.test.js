/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducer/index';
import Cart from './Cart';

configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('cart page', () => {
  it('renders cart page', () => {
    mount(
      <Provider store={createStore(reducers, {})}>
        <Cart />
      </Provider>,
    );
  });
});
