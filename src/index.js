import _ from 'lodash';
import './style.css';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.addEventListener('click', printMe);

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());