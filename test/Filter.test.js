import React from 'react';
import { mount } from 'enzyme';
import Filter from "../src/components/Filter";

describe('should renders Filter correctly', () => {
  const tree = mount(<Filter movieCount={10}/>);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('should render Filter component with movieCount', () => {
    const tree = mount(<Filter movieCount={10} />);
    expect(tree.prop('movieCount')).toEqual(10);
});