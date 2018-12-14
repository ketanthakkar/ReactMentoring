import React from 'react';
import { mount } from 'enzyme';
import Search from "../src/components/Search";

describe('should renders Footer correctly', () => {
  const tree = mount(<Search />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});