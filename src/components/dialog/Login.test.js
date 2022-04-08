/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import reducers from '../../reducer/index';
import Login from './Login';

configure({ adapter: new Adapter() });

describe('Login componenet redering', () => {
  let component;
  it('should have input for email and password', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openLogin = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <Login openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      </Provider>,
    );
    expect(component.find('.email-container')).toHaveLength(1);
    expect(component.find('.password-container')).toHaveLength(1);
  });
  it('should have an empty email and password state var', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openLogin = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <Login openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      </Provider>,
    );
    expect(component.find('#email-box').get(0).props.value).toEqual('');
    expect(component.find('#password-box').get(0).props.value).toEqual('');
  });
  it('should login properly', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openLogin = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
        />
      </Provider>,
    );

    jest
      .spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve({
        data: {
          jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1NDQxMjk3LCJleHAiOjE2NDgwMzMyOTd9.693ipnAyhvoAua2Uc5EHx_WxVYkMxdSZxdn1OZYRlIw',
          user: {
            id: 1, username: 'Shravya', email: 'shravyamaradithaya@gmail.com', provider: 'local', confirmed: true,
          },
        },
      }));
    act(() => {
      component.find('#email-box').first().props().onChange({ target: { name: 'email', value: 'shravyamaradithaya@gmail.com' } });
    });
    act(() => {
      component.find('#password-box').first().props().onChange({ target: { name: 'password', value: 'Shravya3*' } });
    });
    act(() => {
      component.find('.Login-button').simulate('click');
    });
    expect(setOpenLogin.mock.calls.length).toEqual(0);
  });
  it('should call signUp component', () => {
    const setOpenLogin = jest.fn();
    const setOpenSignUp = jest.fn();
    const openLogin = true;
    component = mount(
      <Provider store={createStore(reducers, {})}>
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
        />
      </Provider>,
    );
    act(() => {
      component.find('.sign-up-page').simulate('click');
    });
    expect(setOpenLogin.mock.calls.length).toEqual(1);
  });
});
