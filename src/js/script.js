{ 
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },

    containerOf: {
      bookList: '.books-list',
    },

    books: {
      name: '.book__name',
      img: '.book__image',
      form: '.filters'
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
    }

    getElements(){
      const thisBook = this; 

      thisBook.container = document.querySelector(select.containerOf.bookList);
      //console.log('thisbookcontainer', thisBook.container);
      thisBook.name = document.querySelector(select.books.name);
      //console.log('thisbookname', thisBook.name);
      thisBook.img = document.querySelector(select.books.img);
      //console.log('thisbookimg', thisBook.img);
      thisBook.form = document.querySelector(select.books.form);
      //console.log('thisbookform', thisBook.form);
    }

    render(){
      const thisBook = this;

      for(let bookId of dataSource.books){
        
        const generatedHTML = templates.bookLists(bookId);

        const generatedDom = utils.createDOMFromHTML(generatedHTML); 

        thisBook.container.appendChild(generatedDom);

      }
    }

  }

  new Books();
}
