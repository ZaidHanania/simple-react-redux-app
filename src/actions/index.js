export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return an action (object with type)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}