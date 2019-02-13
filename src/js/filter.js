
import {renderBeerList, renderNewList} from './beers';
import appConfig from './config';

const config = appConfig();

const filterForm = document.querySelector('.filter-form');
const filterField = document.querySelector('#year');

filterForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const year = filterField.value;
    //renderNewList();
    renderBeerList(config.limit, "", year);
})