// State argument is not application state, only state in reducer
export default function(state = null, action) { // state = null is ES6 syntax
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}