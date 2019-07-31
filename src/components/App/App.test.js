import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {mockAnimals, mockDonations, mockError, mockLoading} from '../../util/mockData';
import * as action from '../../actions';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MSTP', () => {
    it('should map state to props', () => {
      const mockState = {
        animals: mockAnimals,
        donations: mockDonations
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(mockState)
    });
  });

  describe('MDTP', () => {
    it('should call getAnimals when getAnimals action is dispatched', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = action.getAnimals(mockAnimals);
      const mappedProps = mapDispatchToProps(mockDispatch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call getDonations when getDonations action is dispatched', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = action.getDonation(mockDonation);
      const mappedProps = mapDispatchToProps(mockDispatch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call hasError when hasError action is dispatched', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = action.hasError(mockError);
      const mappedProps = mapDispatchToProps(mockDispatch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call isLoading when isLoading action is dispatched', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = action.isLoading(mockLoading);
      const mappedProps = mapDispatchToProps(mockDispatch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    });
  });
  });