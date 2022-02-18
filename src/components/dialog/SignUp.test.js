/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import reducers from '../../reducer/index';
import SignUp from './SignUp';

configure({ adapter: new Adapter() });

describe('SignUp componenet redering', () => {
  let component;
  it('should have input for email and password', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openSignUp = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <SignUp openSignUp={openSignUp} setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      </Provider>,
    );
    expect(component.find('.email-container')).toHaveLength(1);
    expect(component.find('.password-container')).toHaveLength(1);
  });
  it('should have an empty email and password state var', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openSignUp = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <SignUp openSignUp={openSignUp} setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      </Provider>,
    );
    expect(component.find('#email-box').get(0).props.value).toEqual('');
    expect(component.find('#password-box').get(0).props.value).toEqual('');
  });
  it('should Signup properly', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openSignUp = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <SignUp openSignUp={openSignUp} setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      </Provider>,
    );
    act(() => {
      component.find('#email-box').first().props().onChange({ target: { name: 'email', value: 'hrishikesh@gmail.com' } });
    });
    act(() => {
      component.find('#password-box').first().props().onChange({ target: { name: 'password', value: 'Shravya3*' } });
    });
    act(() => {
      component.find('.Login-button').simulate('click');
    });
    expect(setOpenLogin.mock.calls.length).toEqual(0);
  });
});
