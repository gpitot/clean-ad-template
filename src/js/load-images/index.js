import imagesLoaded from 'imagesloaded';


export const loadImages = (el, hostingLocation, cb) => {
    console.log(el.querySelectorAll('img'));
    const images = Array.from(el.querySelectorAll('img'));
    console.log(images);
    for (let i=0; i<images.length; i+=1) {
        images[i].setAttribute('src', `${hostingLocation}${images[i].getAttribute('data-path')}`)
    }
    imagesLoaded(el, cb);
}