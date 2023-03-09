export default function(state = null, action) {

  if (state === undefined) {
    return 'general'; 
  }
  switch (action.type) {
    default:
    return state;
  }
}
