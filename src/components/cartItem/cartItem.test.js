/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import reducers from '../../reducer/index';
import CartItem from './CartItem';
import GroupButton from './GroupedButton';

configure({ adapter: new Adapter() });

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
describe('cart item componenet redering', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <CartItem item={item} />
      </Provider>,
    );
  });
  it('should contain grouped button component', () => {
    expect(component.containsMatchingElement(<GroupButton item={item} />));
  });
  it('check remove operation', () => {
    const button = component.find('#remove').first();
    act(() => {
      button.simulate('click');
    });
  });
});
describe('group componenet redering', () => {
  const wrapper = mount(
    <Provider store={createStore(reducers, {})}>
      <GroupButton item={item} />
    </Provider>,
  );
  it('check add operation', () => {
    act(() => {
      wrapper.find('#increase').first().simulate('click');
    });
    act(() => {
      wrapper.find('#decrease').first().simulate('click');
    });
  });
});
