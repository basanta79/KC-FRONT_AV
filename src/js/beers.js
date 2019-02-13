import apiBeers from './api';
import appConfing from './config.js';

const {getBeers, addLike} = apiBeers();
const config = appConfing();

const infoTemplate = (num, limit) => `
<p>Se han encontrado ${num} cervezas, se muestran las ${limit>num? num : limit} primeras.</p>
`;

const beerListTemplate = ({beerId, name, image, description, likes, firstBrewed}) => `
<div data-id="${beerId}" class="card principal">
      <header class="card-header">
        <h2>${name}</h2>
      </header>
      <div class="card-content">
        <div class="card-content-image">
          <img src="${image}">
        </div>
        <div class="card-content-text">
          <p>${description}</p>
          
          <div class="rating-container" data-id="${beerId}">
            <button class="icon-like">
              <i class="fas fa-heart"></i> ${likes}
            </button>
            <p> ${firstBrewed} </p>
          </div>
        </div>
      </div>
    </div>
`;


export const renderDOM = (element, htmlContent) => {
    const htmlId = document.getElementById(element);
    htmlId.innerHTML=htmlContent;
}

const createDetailLink = (classLabel, url) => {
  const headers = document.querySelectorAll(classLabel);
  headers.forEach( item => {
    const id = item.parentNode.getAttribute('data-id');
    item.addEventListener('click', () => window.location.href = `${url}${id}`);
  })
}

export const createLikelLink = (classLabel) => {
  const headers = document.querySelectorAll(classLabel);
  const searchField = document.querySelector('#search-field');
  let filterValue;
  const filterField = document.querySelector('#year');
  console.log(filterField);
  filterField ? filterValue = filterField.value : filterValue = "";
  headers.forEach( item => {
    const id = item.parentNode.getAttribute('data-id');
    item.addEventListener('click', async () => {
      console.log('pre-addlike');
      await addLike(id);
      console.log('post-addlike');
      console.log(searchField.value, "  -  ", filterValue);
      renderBeerList(10, searchField.value, filterValue);
    });
  })
}


const createBeersHtml = (arrBeers, limit) => {
    let renderList="";
    arrBeers.slice(0,limit).forEach(item =>{
        renderList += beerListTemplate(item);
    })
    return renderList;
}

const createInfoHtml = (arrBeers, limit) => {
    return infoTemplate(arrBeers.length, limit);
}

function compareYear(year){
  console.log(year);
  return function (beer){
    if (beer.firstBrewed.split('/')[1]==year){
      return true;
    }
  }
};

const filterByYear = (beerList, year) => {
    const beerListFiltered = beerList.filter( compareYear(year));
    return beerListFiltered;

}

export const renderNewList = (year, limit) => {
  const lista = JSON.parse(window.sessionStorage.finalList);
  console.log(lista);
  let finalList = [];
  year ? finalList = filterByYear(lista, year): finalList = lista;
  //const finalList = filterByYear(lista, year);
  const htmlBeerList = createBeersHtml(finalList, limit);
  const htmlInfo = createInfoHtml(finalList, limit);
  renderDOM('info-section', htmlInfo);
  renderDOM('beer-section', htmlBeerList);
  createDetailLink('.card-header',config.detailView);
  createLikelLink('.icon-like',config.detailView);
}


export const renderBeerList = async (limit, query) => {
  const filterField = document.querySelector('#year');
  let filterValue;
  filterField ? filterValue = filterField.value : filterValue = "";
  const finalList = await getBeers(query);
  const htmlBeerList = createBeersHtml(finalList, limit);
  const htmlInfo = createInfoHtml(finalList, limit);
  window.sessionStorage.finalList = JSON.stringify(finalList);
  renderDOM('info-section', htmlInfo);
  renderDOM('beer-section', htmlBeerList);
  createDetailLink('.card-header',config.detailView);
  createLikelLink('.icon-like',config.detailView);
  //console.log(filterField.value);
  if(filterValue!=""){
    renderNewList(filterField.value, limit);
  }
};

console.log('beers')