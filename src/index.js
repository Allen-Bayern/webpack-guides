import _ from 'lodash';
import './style.css';
// import { print } from './print';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    /* const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.addEventListener('click', printMe);

    element.appendChild(btn); */
    // element.addEventListener('click', print);

    return element;
}

document.body.appendChild(component());

/* const getComponent = async () => {
    const element = document.createElement('div');
    try {
        const { default: _ } = await import('lodash');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    } catch (error) {
        return 'An error occurred while loading the component';
    }
}

getComponent().then(component => {
    document.body.appendChild(component);
}); */