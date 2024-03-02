import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const gallery = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: 'bottom',
    captionDelay: '250',
    captionsData: 'alt',
    close: true,
    animationSpeed: 200,
    preloading: true,
    loop:	true,
    scaleImageToRatio: true,
    scrollZoomFactor: 0.9,
    overlay: true,
    overlayOpacity: 1.0,
    spinner:	true
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    gallery.innerHTML = "";
    const QUERY = event.target.elements.serchfield.value.trim();
    if (QUERY.length === 0) {
        return iziToast.error({
                message: ("Fill in the search fild")
               });      
    }
    getImages(QUERY).then((data) => renderData(data) )
    form.reset();
});

  



