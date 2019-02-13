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
  headers.forEach( item => {
    const id = item.parentNode.getAttribute('data-id');
    item.addEventListener('click', async () => {
      console.log('pre-addlike');
      await addLike(id);
      console.log('post-addlike');
      window.location.reload();
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

export const renderNewList = () => {
  console.log(finaList);
}


export const renderBeerList = async (limit, query, year) => {
    const list = await getBeers(query);
    let finalList = [];
    year ? finalList = filterByYear(list, year): finalList = list;
    const htmlBeerList = createBeersHtml(finalList, limit);
    const htmlInfo = createInfoHtml(finalList, limit);
    renderDOM('info-section', htmlInfo);
    renderDOM('beer-section', htmlBeerList);
    createDetailLink('.card-header',config.detailView);
    createLikelLink('.icon-like',config.detailView);
};

console.log('beers')