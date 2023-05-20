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

  const favoriteBooks = [];

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

      thisBook.images = thisBook.container.querySelectorAll(select.book.image);

      for(const imageId of thisBook.images){
        imageId.addEventListener('dblclick', function(event){
          event.preventDefault();
          const id = imageId.getAttribute('data-id');
          console.log(id);
          if(id  == favoriteBooks){
            imageId.classList.remove('favorite');
            favoriteBooks.pop(id);
          }else {
            imageId.classList.add('favorite');
            favoriteBooks.push(id);
          }
        });
      }

      return favoriteBooks;
      
    }

  }

  new Books();
}
