import Map from './js/map';
import AdScrolling from './js/ad-scrolling';
import Tracker from './js/tracking';

import {loadImages} from './js/load-images';


const parent = document.getElementById('unitContainer');
console.log(hostingLocation);

if (parent) {
    $(parent).load(hostingLocation + 'unit/index.unit', htmlLoaded);
}




function htmlLoaded() {
    
    //pass job , client, section
    //if none then dont track
    
    console.log(window.frameElement);
    //setup ad scrolling
    
    if (window.frameElement) {
        //pass job , client, section
        const tracker = new Tracker({job:null, client:null, section:'fireplace'})
        const adscroller = new AdScrolling({iframe : window.frameElement});
        console.log(adscroller);
        adscroller.setUpDimensions();
    }

    //images
    loadImages(parent, hostingLocation, () => {
        const dimensions = {
            rows : 3,
            cols : 12,
        }
        const parentEl = document.getElementById('game');
        new Map({dimensions, parentEl})
    })
}

