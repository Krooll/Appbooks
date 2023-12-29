import { select, templates } from './settings.js';
import utils from './utils.js';
import dataSource from './data.js';

class Books{
  constructor(){
    const thisBook = this;

    thisBook.favoriteBooks = [];
    thisBook.filters = [];

    thisBook.getElements();
    thisBook.render();
    thisBook.initActions();
    thisBook.filterBooks();
  }

  getElements(){
    const thisBook = this; 

    thisBook.container = document.querySelector(select.containerOf.bookList);
    thisBook.filtersElement = document.querySelector(select.book.filter);
      
  }

  render(){
    const thisBook = this;

    for(let bookId of dataSource.books){
      const ratingBgc = thisBook.determineRatingBgc(bookId.rating);
      const ratingWidth = 10 * bookId.rating;
      bookId.ratingBgc = ratingBgc;
      bookId.ratingWidth = ratingWidth;
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
          if (!thisBook.favoriteBooks.includes(bookId)){
            img.classList.add('favorite');
            thisBook.favoriteBooks.push(bookId);
          }
          else {
            img.classList.remove('favorite');
            thisBook.favoriteBooks.pop(bookId);
          } 
        }
        console.log('fav', thisBook.favoriteBooks);
        return thisBook.favoriteBooks;
      });

    }

    thisBook.filtersElement.addEventListener('click', function(event){
      event.preventDefault();
      const filter = event.target;
      const checked = filter.checked;

      if(filter.tagName == 'INPUT' && filter.type == 'checkbox' && filter.name == 'filter'){
        if(!checked){
          thisBook.filters.pop(filter.value);
        }else if (checked){
          thisBook.filters.push(filter.value);
        }
      }

      thisBook.filterBooks();
    });
  }

  filterBooks(){
    const thisBook = this; 

    for(const book of dataSource.books){
      thisBook.shouldBeHidden = false; 
      const cover = document.querySelector('.book__image[data-id="'+ book.id+'"]');
      for(const filter of thisBook.filters) {
        if(!book.details[filter]){
          thisBook.shouldBeHidden = true;
          break;
        }
      }
      if(thisBook.shouldBeHidden){                                                  
        cover.classList.add('hidden');                                 
      } else {
        cover.classList.remove('hidden');                                   
      }
    }
  }

  determineRatingBgc(rating){
    const thisBook = this; 
    thisBook.rating = '';
    if(rating < 6) thisBook.rating = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%);';
    if(rating > 6 && rating <= 8) thisBook.rating = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%);';
    if(rating > 8 && rating <=9) thisBook.rating = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%);';
    if(rating > 9) thisBook.rating = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%);';

    return thisBook.rating;
  }
}

new Books();

