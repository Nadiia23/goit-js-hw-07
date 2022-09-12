import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const cardsGallery = (createGallery(galleryItems));

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

function createGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {
  stopAction(event);

  //якщо не картинка, виходимо
  if(event.target.nodeName !== "IMG") {
    return;
  }

  //basicLigthbox open
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show();
 
  //basicLigthbox close("Escape")
galleryContainer.addEventListener('keydown', (event) => {
  if(event.code === "Escape") {
    instance.close();
  }
});
}

function stopAction(event) {
  event.preventDefault();
}


  

