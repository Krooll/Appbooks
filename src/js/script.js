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
      
      thisBook.images.addEventListener('dblclick',function(event){
        event.preventDefault();
        if (event.target.offsetParent.classList.contains('book__image')){ //offsetParent jest ustawiony na najbliższy element nadrzędny, który jest pozycjonowany bezwzględnie
          const bookId = event.target.offsetParent.getAttribute('data-id');
          if (thisBook.images.includes(bookId)){
            thisBook.images.classList.remove('favorite');
            thisBook.images.splice(thisBook.favoriteBooks.indexOf(bookId), 1);
          }
          else {
            thisBook.images.classList.add('favorite');
            thisBook.favoriteBooks.push(bookId);
          }
        }
      });
    }
  }

  new Books();
}
