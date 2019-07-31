import * as actions from '../actions';
import {mockAnimals, mockDonations, mockDonation, mockError, mockLoading} from '../util/mockData';

describe('actions', () => {
  it('should have a type of GET_ANIMALS', () => {
    const expectedAction = {
      type: 'GET_ANIMALS',
      payload: {
        mockAnimals
      }
    };
    const result = actions.getAnimals(mockAnimals);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of GET_DONATIONS', () => {
    const expectedAction = {
      type: 'GET_DONATIONS',
      payload: {
      mockDonations
      }
    };
    const result = actions.getDonations(mockDonations);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of ADD_DONATION', () => {
    const expectedAction = {
      type: 'ADD_DONATION',
      payload: {
      mockDonation
      }
    };
    const result = actions.addDonation(mockDonation);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      payload: {
      mockLoading
      }
    };
    const result = actions.isLoading(mockLoading);
    expect(result).toEqual(expectedAction);
  })
  it('should have a type of HAS_ERROR', () => {
    const expectedAction = {
      type: ' HAS_ERROR',
      payload: {
      mockError
      }
    };
    const result = actions.hasError(mockError);
    expect(result).toEqual(expectedAction);
  })
})