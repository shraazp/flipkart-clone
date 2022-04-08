/* eslint-disable no-undef */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import About from './About';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it('renders About component', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.containsMatchingElement(<About />)).toEqual(true);
  });
});
