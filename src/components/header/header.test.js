/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Button } from '@material-ui/core';
import { act } from 'react-dom/test-utils';
import reducers from '../../reducer/index';
import Header from './Header';
import Search from './Search';
import CustomButtons from './CustomButtons';
import LoginButton from './LoginButton';

configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header componenet redering', () => {
  let component;
  it('should render all the components', () => {
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <Header />
      </Provider>,
    );
    expect(component.containsMatchingElement(<Search />)).toEqual(true);
    expect(component.containsMatchingElement(<CustomButtons />)).toEqual(true);
    expect(component.containsMatchingElement(<LoginButton />)).toEqual(true);
  });
});

describe('Custom buttons rendering', () => {
  let component;
  it('should check if on clicking cart navigates properly', () => {
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <CustomButtons />
      </Provider>,
    );
    act(() => {
      component.find(Button).simulate('click');
    });
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/cart');
  });
});
