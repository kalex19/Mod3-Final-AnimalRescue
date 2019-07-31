import * as actions from '../actions';
import {mockAnimals, mockDonations, mockDnation, mockError, mockLoading} from '../util/mockData';

describe('actions', () => {
  it('should have a type of GET_ANIMALS', () => {
    const expectedAction = {
      type: 'GET_ANIMALS',
      mockAnimals
    };
    const result = actions.getAnimals(mockAnimals);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of GET_DONATIONS', () => {
    const expectedAction = {
      type: 'GET_DONATIONS',
      mockDonations
    };
    const result = actions.getDonations(mockDonations);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of ADD_DONATION', () => {
    const expectedAction = {
      type: 'ADD_DONATION',
      mockDonation
    };
    const result = actions.addDonation(mockDnation);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      mockLoading
    };
    const result = actions.isLoading(mockLoading);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of HAS_ERROR', () => {
    const expectedAction = {
      type: ' HAS_ERROR',
      mockError
    };
    const result = actions.hasError(mockError);
    expect(result).toEqual(expectedAction);
  })
})