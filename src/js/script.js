{ 
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },

    containerOf: {
      bookList: '.books-list',
    },

    book: {
      image: '.book__image',
    },

  };

  const templates = {
    bookLists: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  

  class Books{
    constructor(){
      const thisBook = this;

      thisBook.getElements();
      thisBook.render();
      thisBook.initActions();
    }

    getElements(){
      const thisBook = this; 

      thisBook.container = document.querySelector(select.containerOf.bookList);
      thisBook.images = thisBook.container.querySelectorAll(select.book.image);
      console.log('images',thisBook.images);
    }

    render(){
      const thisBook = this;

      for(let bookId of dataSource.books){
        
        const generatedHTML = templates.bookLists(bookId);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML); 

        thisBook.container.appendChild(generatedDOM);

      }
    }

    initActions(){
      const thisBook = this;

      const favoriteBooks = [];

      for(let imageId of thisBook.images){
        imageId.addEventListener('dblclick', function(event){
          event.preventDefault();
          imageId.classList.add('favorite');
          const id = imageId.getAttribute('data-id');
          favoriteBooks.push(id);
        });
      }

      console.log('favorite',favoriteBooks);
      return favoriteBooks;
    }

  }

  new Books();
}
