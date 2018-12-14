import React, { Component }  from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import ErrorBoundary from "../src/error/ErrorBoundary";

class ComponentWithError extends Component {
    render() {
        throw new Error('No Movies Found!');

      return (
        <div>
          <input type = "text" value = {null}/>  
        </div>
      );
    }
}

describe('<ErrorBoundary> window',()=> {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ErrorBoundary>Test</ErrorBoundary> ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  
    it('displays error message on error generated by child', () => {
      const wrapper = shallow(
        <ErrorBoundary > 
          <ComponentWithError />
        </ErrorBoundary> 
        )
      console.log(wrapper.debug() )
    })
})