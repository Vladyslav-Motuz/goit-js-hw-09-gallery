import './sass/main.scss';

import { galleryItems } from './js/galleryItems';
import { item } from './js/itemImage';

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const buttonClose = document.querySelector('.lightbox__button');

galleryEl.insertAdjacentHTML('beforeend', item);

function modalImage(src, alt) {
  lightboxImg.src = `${src}`;
  lightboxImg.alt = `${alt}`;
}

function onModalOpenClick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    lightboxEl.classList.add('is-open');
    modalImage(event.target.dataset.source, event.target.alt);    
  }
}

function onModalCloseClick(event) {
  if (event.target.nodeName !== 'IMG' || event.target.nodeName === 'BUTTON') {
    lightboxEl.classList.remove('is-open');
    modalImage('', '');
  }
}

galleryEl.addEventListener('click', onModalOpenClick);
buttonClose.addEventListener('click', onModalCloseClick);
overlay.addEventListener('click', onModalCloseClick);