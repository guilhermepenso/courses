// ES6 Module = An external file that contians reusable code that can be imported into other JavaScript files.
//              Write reusable code for manu different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const cimcurference = getCircumference(10);
console.log(`${cimcurference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);