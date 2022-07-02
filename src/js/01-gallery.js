// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

/* 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. */

const makeGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </div>`;
  })

  .join('');

refs.gallery.insertAdjacentHTML('beforeend', makeGalleryItem);

/* 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. */

let lightbox = new SimpleLightbox('.gallery__item a', {
  /* 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
  Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения. */
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
