/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import reducers from '../../reducer/index';
import Login from './Login';
import { LoginAPI } from '../../services/LoginService';

const axios = require('axios');

configure({ adapter: new Adapter() });

jest.mock('axios');

test('should fetch users', () => {
  const email = 'shravyamaradithaya@gmail.com';
  const password = 'Shravya3*';
  const users = {
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1MTAzMDM1LCJleHAiOjE2NDc2OTUwMzV9.zVSGgiNVx0185SPIycwzo7VyS_A3t6hUt9J3inOw3x0',
    user: {
      id: 1,
      username: 'Shravya',
      email: 'shravyamaradithaya@gmail.com',
      provider: 'local',
      confirmed: true,
      blocked: false,
      createdAt: '2022-02-04T05:05:18.514Z',
      updatedAt: '2022-02-04T05:05:18.514Z',
    },
  };
  const resp = { data: users };

  axios.post.mockImplementation(() => Promise.resolve(resp));

  LoginAPI(email, password).then((data) => expect(data.data).toEqual(users)).catch();
});

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
    act(() => {
      component.find('#email-box').first().props().onChange({ target: { name: 'email', value: 'shravyamaradithaya@gmail.com' } });
    });
    act(() => {
      component.find('#password-box').first().props().onChange({ target: { name: 'password', value: 'Shravya3*' } });
    });
    act(() => {
      component.find('.Login-button').simulate('click');
    });
    expect(setOpenLogin.mock.calls.length).toEqual(1);
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
