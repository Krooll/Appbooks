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
      filter: '.filters'
    },

  };

  const templates = {
    bookLists: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  const favoriteBooks = [];

  const filters=[];

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
      thisBook.filters = document.querySelector(select.book.filter);
      
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

      for(let imgId of thisBook.images){
        const img = imgId;
  
      img.addEventListener('dblclick',function(event){
        event.preventDefault();
        if (event.target.offsetParent.classList.contains('book__image')){
          const bookId = event.target.offsetParent.getAttribute('data-id');
          console.log(bookId);
          if (bookId == favoriteBooks){
            img.classList.remove('favorite');
            favoriteBooks.pop(bookId);
          }
          else {
            img.classList.add('favorite');
            favoriteBooks.push(bookId);
          }
        }
        console.log('fav', favoriteBooks);
        return favoriteBooks;
      });

    }

    thisBook.filters.addEventListener('click', function(){
      
    });
    }
  }

  new Books();
}
