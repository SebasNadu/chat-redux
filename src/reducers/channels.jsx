export default function(state = null, action) {

  if (state === undefined) {
    return ['general', 'react', 'paris'];
  }
  switch (action.type) {
    default:
    return state;
  }
}
