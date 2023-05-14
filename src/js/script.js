{ 
  'use strict';

  const select = {
    templateOf: {
        book: '#template-book',
    },

    containerOf: {
        bookList: '#books-list',
    },

    book: {
        name: '.book_name',
        price: '.book_price',
        rating: '.book_rating',
        cover: '.book_image',
    }
  };

  const templates = {
    bookLists: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  console.log('name', select.book.name);

  class Books{
    constructor(){
        const thisBook = this;

        thisBook.getElements();
    }

    getElements(){
        const thisBook = this; 

    }

  }

  new Books();
}
