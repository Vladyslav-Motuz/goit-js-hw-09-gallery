import { galleryItems } from './galleryItems';
export const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></img></a></li>`;
}).join('');