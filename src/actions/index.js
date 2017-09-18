export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return actio, an OBJECT with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
