import imagesLoaded from 'imagesloaded';


export const loadImages = (el, hostingLocation, cb) => {
    const images = Array.from(el.querySelectorAll('img'));
    for (let i=0; i<images.length; i+=1) {
        console.log(`${hostingLocation}${images[i].getAttribute('data-path')}`)
        images[i].setAttribute('src', `${hostingLocation}${images[i].getAttribute('data-path')}`)
    }
    imagesLoaded(el, cb);
}