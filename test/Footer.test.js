import React from 'react';
import { mount } from 'enzyme';
import Footer from "../src/components/Footer";

describe('should renders Footer correctly', () => {
  const tree = mount(<Footer />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});