import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryRef = document.querySelector(".gallery");

const listItems = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  const listItem = document.createElement("li");

  const galleryItem = document.createElement("a");
  galleryItem.classList.add("galery__item");
  galleryItem.href = galleryItems[i].original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = galleryItems[i].preview;
  galleryImage.alt = galleryItems[i].description;

  galleryItem.append(galleryImage);
  listItem.append(galleryItem);

  listItems.push(listItem);
}

galleryRef.append(...listItems);

// ---------------------------------------------------------------

let gallery = new SimpleLightbox(".gallery a");

gallery.options.captionPosition = "bottom";
gallery.options.captionDelay = 250;
gallery.options.captionsData = "alt";
