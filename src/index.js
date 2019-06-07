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
    
    console.log('iframe html loaded');
    console.log(window.frameElement);
    //setup ad scrolling
    if (window.frameElement) {
        console.log('iframe window frame element')
        //pass job , client, section
        const tracker = new Tracker({job:null, client:null, section:'fireplace'})
        console.log('tracker created')
        const adscroller = new AdScrolling({iframe : window.frameElement});
        console.log(adscroller);
        console.log('ad scroller created')
    }

    //images
    loadImages(parent, hostingLocation, () => {
        console.log('iframe images loaded')

        

        const dimensions = {
            rows : 3,
            cols : 12,
        }
        const parentEl = document.getElementById('game');
        new Map({dimensions, parentEl})
    })
}

