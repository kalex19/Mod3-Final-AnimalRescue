import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should map state to props', () => {

  });
  it('should map dispatch to props', () => {

  });
})