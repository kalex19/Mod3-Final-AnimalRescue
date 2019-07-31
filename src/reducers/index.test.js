import {animalReducer} from './animalReducer';
import {donationReducer} from './donationReducer';
import {errorReducer} from './errorReducer';
import {loadingReducer} from './loadingReducer';

describe('animalReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = animalReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should return state with an animals array', () => {

  })
})

describe('donationReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = donationReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should return state with a donations array', () => {
    
  });
  it('should add a new donation to state', () => {

  });
})

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should return state with an error', () => {
    
  });
  it('shoudl add a new donation to state', () => {

  });
})

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should return state with a boolean', () => {
    
  });

})


