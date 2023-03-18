import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    console.log(Data);
    console.log(Notes);

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());