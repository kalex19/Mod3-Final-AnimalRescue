export const loadingReducer = (state = false, action) => {
const {type, payload} = action
switch(type){
case 'IS_LOADING': return payload.loading;
default: return state
}};