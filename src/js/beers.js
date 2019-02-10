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


const getBeerList = async () => {
    const list = await getBeers();
    const element = document.getElementById('show-section')
    let renderList = "";
    list.forEach(element => {
        renderList += beerListTemplate(element);
    });
    element.innerHTML=renderList;
    console.log(renderList);
};

getBeerList();

console.log('beers.js')