import {renderBeerList} from './beers';

const searchForm = document.querySelector('#search-form');
const searchField = document.querySelector('#search-field');

searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (searchField.value !== ""){
        renderBeerList(10, searchField.value);
    }else{
        renderBeerList(10);
    };
});


