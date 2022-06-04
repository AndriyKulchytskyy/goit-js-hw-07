import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const makeGalleryMarkup = ({ preview, original, description }) =>
  `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-sourse="${original}"alt="${description}"></a></div>`;

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.reduce((acc, el) => {
  return (acc += makeGalleryMarkup(el));
}, "");

galleryRef.innerHTML = galleryMarkup;

// ---------------------------------------------------------------

let gallery = new SimpleLightbox(".gallery a");

gallery.options.captionPosition = "bottom";
gallery.options.captionDelay = 250;
gallery.options.captionsData = "alt";
