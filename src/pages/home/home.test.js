/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './Home';
import reducers from '../../reducer/index';
import Header from '../../components/header/Header';

configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('Home', () => {
  const component = mount(
    <Provider store={createStore(reducers, {})}>
      <Home />
    </Provider>,
  );
  test('contains header component', () => {
    expect(component.containsMatchingElement(<Header />)).toEqual(true);
  });
});
