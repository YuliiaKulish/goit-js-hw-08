import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');
const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`)
  .join('');


galleryContainerEl.insertAdjacentHTML('beforeend', createItemsMarkup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250
});