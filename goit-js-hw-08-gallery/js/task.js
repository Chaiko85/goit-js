"use strict";

import gallery from "./gallery-items.js";

let ourGallery = "";

gallery.forEach((images) => {
  ourGallery += `<li class="gallery__item"><a class="gallery__link" href="${images.original}"
><img class="gallery__image"
src="${images.preview}" data-source="${images.original}" alt="${images.description}"/>
</a></li>`;
});

const ourGalleryList = document.querySelector(".gallery");
ourGalleryList.insertAdjacentHTML("afterbegin", ourGallery);

const modalWindow = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
ourGalleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const image = event.target;
  if (image.matches("img")) {
    modalWindow.classList.add("is-open");
    lightboxImage.setAttribute("src", image.dataset.source);
  }
});

const buttonClose = document.querySelector(
  'button[data-action="close-lightbox"]'
);
buttonClose.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
  lightboxImage.setAttribute("src", "");
});
