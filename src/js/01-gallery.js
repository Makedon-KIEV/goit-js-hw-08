import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import renderGallery from './helpers/01-render-markup';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
