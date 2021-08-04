import "./index.css";
import JS_IMG from './assets/jsimage.png';

console.log('Hello World!');

const jsImadgeHTML = document.createElement('img')
jsImadgeHTML.className = 'js-image'
jsImadgeHTML.src = JS_IMG

document.body.append(jsImadgeHTML)