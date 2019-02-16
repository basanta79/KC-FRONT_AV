import './styles/index.scss';
import './js/ui';
import appConfing from './js/config.js';
import {renderBeerList} from './js/beers';
import './js/navbar';
import './js/filter';
import './images/cerveza_final_peq.png';
import './images/cerveza_final_med.png';
import './images/favicon.ico';

const config = appConfing();
renderBeerList(config.limit);

console.log('hello World!');