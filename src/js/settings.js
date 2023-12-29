export const select = {
  templateOf: {
    book: '#template-book',
  },
  containerOf: {
    bookList: '.books-list',
  },
  book: {
    image: '.book__image',
    filter: '.filters'
  },
};

export const templates = {
  bookLists: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
};