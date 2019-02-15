import './styles/index.scss';
import appConfing from './js/config.js';
import './js/ui';
import './js/navbar';
import { renderBeerDetail } from './js/beerDetail';


const config = appConfing();

renderBeerDetail();

console.log('hello Detail!!');