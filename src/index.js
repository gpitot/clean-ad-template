import Map from './js/map';
import {loadImages} from './js/load-images';


const parent = document.getElementById('unitContainer');
console.log(hostingLocation);

if (parent) {
    $(parent).load(hostingLocation + 'unit/index.unit', htmlLoaded);
}




function htmlLoaded() {
    //images
    loadImages(parent, hostingLocation, () => {
        console.log('loaded')

        

        const dimensions = {
            rows : 3,
            cols : 12,
        }
        const parentEl = document.getElementById('game');
        new Map({dimensions, parentEl})
    })
}

