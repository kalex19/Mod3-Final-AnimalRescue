import React from 'react';
import DonationForm from './DonationForm';
import {shallow} from 'enzyme';
import {mockDonations, mockDonation} from '../../util/mockData';
import * as action from '../../actions';

describe('DnationForm', () => {
  let wrapper, mockPostDonation;

  beforeEach(() => {
    mockPostDonation = jest.fn()
    wrapper = shallow(<DonationForm donations={mockDonations} postDonation={mockPostDonation}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MDTP', () => {
    it('should call addDonation when addDonation action is dispatched', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = action.addDonation(mockDonation);
      const mappedProps = mapDispatchToProps(mockDispatch);
      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    });
  });
  });