import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryRef = document.querySelector(".gallery");

const listItems = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("galery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = galleryItems[i].original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = galleryItems[i].preview;
  galleryImage.dataset.source = galleryItems[i].original;
  galleryImage.alt = galleryItems[i].description;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);

  listItems.push(galleryItem);
}

galleryRef.append(...listItems);

// 2) Реализация делегирования на div.gallery и получение url большого изображения.
//    Замена значения атрибута src элемента <img> в модальном окне перед открытием.

galleryRef.addEventListener("click", onItemClick);

function onItemClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);

  instance.show();
}
