export const donationReducer = (state = [], action) => {
  const {type, payload} = action
  switch(type){
    case 'GET_DONATIONS': return [...state, ...payload.donations];
    case 'ADD_DONATION': return [...state, payload.donation];
    default: return state
  }};