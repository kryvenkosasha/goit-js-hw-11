import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('input'),
  searchButton: document.querySelector('button'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (refs.searchInput.value === '') return;

  const value = e.target.elements.query.value;
  searchImages(value);
});

function searchImages(userValue) {}

function createMarcup() {}
