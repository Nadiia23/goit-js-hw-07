import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const pictures = galleryItems.map(({preview, original, description}) =>`<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"
        alt="${description}"
        title="${description}" />
        </a>`).join('');

gallery.insertAdjacentHTML('afterbegin', pictures);

new SimpleLightbox(".gallery a", { captionDelay: 250 })

// // console.log(galleryItems);

// const galleryContainer = document.querySelector(".gallery");

// const cardsGallery = (createGallery(galleryItems));

// galleryContainer.insertAdjacentHTML('afterbegin', cardsGallery);

// function createGallery(galleryItems) {
//   return galleryItems.map(({preview, original, description}) => {
//         return `
//         <a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}"
//         alt="${description}"
//         title="${description}" />
//         </a>
//       `
//     })
//     .join('');
// } 

// //SimpleLightbox open
// var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

