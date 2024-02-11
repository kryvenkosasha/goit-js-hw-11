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
  searchImages(value).then(data => {
    renderImages(data)
  });
});

function searchImages(userValue) {
  const BASE_URL =
    'https://pixabay.com/api/?key=42312276-5bc23f4af127c6565aecd0d27';

  const options = {
    q: `${userValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function createMarcup(images) {
  images.map((image) => {
    return `<li><a href=`${ image.largeImageURL } `><img src=`${ image.webformatURL } `></a>
  <p>`${image.tags} `</p>
  <p>`${image.likes} `</p>
  <p>`${image.views} `</p>
  <p>`${image.comments} `</p>
  <p>`${image.downloads} `</p>
  
  </li>`
})
}

function renderImages(data) {
  const markup = createMarcup(data);
  refs.image.insertAdjacentHTML('afterbegin', markup);
}