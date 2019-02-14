import apiBeers from './api';
import appConfing from './config.js';
import { renderDOM, createLikelLink  } from './beers';

const { getDetail, addLike } = apiBeers();
const config = appConfing();

const beerTemplate = ({beerId, name, image, description, likes, firstBrewed, price, contributedBy, ingredients}) => `
<div data-id="${beerId}" class="card principal">
      <header class="card-header">
        <h2>${name}</h2>
        <p class="card-price">${price} €</p>
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

const createLikelLinkDetail = (classLabel) => {
  const headers = document.querySelectorAll(classLabel);
  headers.forEach( item => {
    const id = item.parentNode.getAttribute('data-id');
    item.addEventListener('click', async () => {
      console.log('pre-addlike');
      await addLike(id);
      console.log('post-addlike');
      renderBeerDetail();
    });
  })
}

export const renderBeerDetail = async()=> {
    const [,_id] = window.location.search ? window.location.search.split('=') : [3,1];
    const beer = await getDetail(_id);
    console.log(beer);
    const beerHtml = beerTemplate(beer);
    renderDOM('beer-detail', beerHtml);
    createLikelLinkDetail('.icon-like');

}

console.log('beerDetail');
