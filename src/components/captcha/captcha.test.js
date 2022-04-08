/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducer/index';
import CaptchaTest from './Captcha';

configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('App componenet redering', () => {
  let component;

  test('contains routerPath component', () => {
    component = shallow(<Provider store={createStore(reducers, {})}><CaptchaTest /></Provider>);
    expect(component.isEmptyRender()).toEqual(false);
  });
});
