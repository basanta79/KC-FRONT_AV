import {renderBeerList} from './beers';
import appConfig from './config';

const config = appConfig();
const searchForm = document.querySelector('#search-form');
const searchField = document.querySelector('#search-field');

searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (searchField.value !== ""){
        renderBeerList(config.limit, searchField.value);
    }else{
        renderBeerList(config.limit);
    };
});


