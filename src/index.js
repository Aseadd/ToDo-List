import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('body');

  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.style.background = ' green';
  return element;
}

document.body.appendChild(component());
