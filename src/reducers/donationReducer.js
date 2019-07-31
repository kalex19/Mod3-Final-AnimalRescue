export const donationReducer = (state = [], action) => {
  const {type, payload} = action
  switch(type){
    case 'GET_DONATION': return [...state, ...payload.donations];
    case 'ADD_DONATION': return [...state, payload.donation];
    default: return state
  }};