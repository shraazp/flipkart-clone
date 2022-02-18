/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import App from './App';
import RoutesPath from './Router';

configure({ adapter: new Adapter() });

describe('App componenet redering', () => {
  let component;

  test('contains routerPath component', () => {
    component = mount(<Provider store={createStore(reducers, {})}><App /></Provider>);
    const routerPath = (
      <div className="App">
        <div><RoutesPath /></div>
      </div>
    );
    expect(component.containsMatchingElement(routerPath)).toEqual(true);
  });
});
