import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('input'),
  searchButton: document.querySelector('button'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (refs.searchInput.value === '') return;

  const value = refs.searchInput.value;
  searchImages(value);
});

function searchImages(userValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const options = {
    headers: {
      key: '42312276-5bc23f4af127c6565aecd0d27',
      q: `${userValue}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };

  return fetch(url, options).then(res => console.log(res));
}

function createMarcup() {}
