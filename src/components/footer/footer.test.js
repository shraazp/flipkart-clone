/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders About component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.containsMatchingElement(<About />)).toEqual(true);
  });
});
