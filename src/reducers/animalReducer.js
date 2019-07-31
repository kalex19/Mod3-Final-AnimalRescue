export const animalReducer = (state = [], action) => {
const {type, payload} = action
switch(type){
  case 'GET_ANIMALS': return [...state, ...payload.animals];
  default: return state
}};