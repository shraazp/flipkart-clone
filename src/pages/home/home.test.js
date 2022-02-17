/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure} from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Home from './Home';
import reducers from '../../reducer/index';
import Header from '../../components/header/Header';

configure({ adapter: new Adapter() });
const createStoreWithMiddleware = applyMiddleware()(createStore);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('Home', () => {
  let component;

  beforeEach(() => {
    component = render(<Provider store={createStoreWithMiddleware(reducers)}><Home /></Provider>);
  });

  test('contains header component', () => {
  });
});
