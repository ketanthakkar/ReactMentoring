import React from 'react';
import { shallow } from 'enzyme';
import Filter from "../src/components/Filter";

describe('should renders Filter correctly', () => {
  
  test('Snapshot test', () => {
    const tree = shallow(<Filter movieCount={10}/>);
    expect(tree).toMatchSnapshot();
  });

  test('should render component with movieCount', () => {
    const count = 10;
    const tree = shallow(<Filter movieCount={count}/>);
    expect(tree.find('.results').text()).toEqual(`${count} movies found`);
  });
});