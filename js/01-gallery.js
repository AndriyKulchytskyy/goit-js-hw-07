import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Исправил:
// 1) клик между картинками открывает серое модальное окно
// 2) переделал цикл через map и шаблонную строку
// 3) слелал проверку клика именно в img
// 4) Добавил закрытие окна при нажатии Space
// 5) Повесил/снял слушателя

const makeGalleryMarkup = ({ preview, original, description }) =>
  `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}"alt="${description}"></a></div>`;

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("");
galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onItemClick);

function onItemClick(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`,
    {
      onShow: (instance) => {
        function onSpaceKeydown(event) {
          if (event.code === "Space") {
            galleryRef.removeEventListener("keydown", onSpaceKeydown);
            instance.close();
          }
        }
        galleryRef.addEventListener("keydown", onSpaceKeydown);
      },
    }
  );
  instance.show();
}
