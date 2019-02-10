import apiBeers from './api';

const {getBeers} = apiBeers();


const beerListTemplate = ({beerId, name, image, description, likes}) => `
<div id="${beerId}" class="card principal">
      <header class="card-header">
        <h2>${name}</h2>
      </header>
      <div class="card-content">
        <div class="card-content-image">
          <img src="${image}">
        </div>
        <div class="card-content-text">
          <p>${description}</p>
          <div class="rating-container">
            <button class="icon">
              <i class="fas fa-star"></i> ${likes}
            </button>
          </div>
        </div>
      </div>
    </div>
`;


const renderDOM = (element, htmlContent) => {
    const htmlId = document.getElementById(element);
    htmlId.innerHTML=htmlContent;
}


const createBeersHtml = (arrBeers, limit) => {
    let renderList="";
    arrBeers.slice(0,limit).forEach(item =>{
        renderList += beerListTemplate(item);
    })
    return renderList;
}


const getBeerList = async (limit) => {
    const list = await getBeers();
    const renderList = createBeersHtml(list, limit);
    renderDOM('show-section', renderList);
    console.log(renderList);
};


getBeerList(3);

console.log('beers.js')