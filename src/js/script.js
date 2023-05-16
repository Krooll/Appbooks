{ 
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },

    containerOf: {
      bookList: '.books-list',
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
      
    }

    render(){
      const thisBook = this;

      for(let bookId of dataSource.books){
        
        const generatedHTML = templates.bookLists(bookId);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML); 

        thisBook.container.appendChild(generatedDOM);

      }
    }

  }

  new Books();
}
