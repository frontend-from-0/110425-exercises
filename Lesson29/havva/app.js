const button = document.getElementById('fetchBtn');
const URL = 'https://api.unsplash.com/';
const gallery = document.getElementById('gallery');
const loadMore = document.getElementById('loadMore');
const errorMsg = document.getElementById('error');
const favorites = document.getElementById('favorites-container');
const favoritesBtn = document.getElementById('favoritesBtn')
let nextPage;
let allLoadedPhotos = []; // this will store all visible photos in the gallery 

button.addEventListener('click', async () => {
  gallery.innerHTML = '';
  allLoadedPhotos = [];

  const data = await fetchData(
    URL + 'photos',
    true,
    'orientation=portrait&count=10',
  );
  gallery.classList.remove('hidden');

  allLoadedPhotos = allLoadedPhotos.concat(data.photos)
  renderGallery(allLoadedPhotos);
  setNextPage(data.link);
});

loadMore.addEventListener('click', async () => {
  const data = await fetchData(nextPage, false);
  if (!data || !data.photos) return // checks if the same photo is loaded before

  allLoadedPhotos = allLoadedPhotos.concat(data.photos);

  renderGallery(allLoadedPhotos);
  setNextPage(data.link);
});

favoritesBtn.addEventListener('click', () => {
  // we do not need async here because standard page navigation doesn't require async or await
  window.open('favorites.html', target = '_blank');
});

function renderGallery(photosToRender) { // clear the gallery
  gallery.innerHTML = '';
  createImages(photosToRender);
}


function createImages(photos) {
  let favoritePhotos = JSON.parse(localStorage.getItem('favoritePhotos')) || [];

  for (let i = 0; i < photos.length; i++) {
    const img = document.createElement('img');
    const likeButton = document.createElement('button');
    const photoContainer = document.createElement('div');

    likeButton.innerHTML = '&#9825';

    if (favoritePhotos.some(photo => photo.id === photos[i].id)) {
      likeButton.innerHTML = '&#9829';
    } else {
      likeButton.innerHTML = '&#9825';
    }

    likeButton.addEventListener('click', () => {
      let freshFavorites = JSON.parse(localStorage.getItem('favoritePhotos')) || [];

      let isAlreadyFavorite = freshFavorites.some(photo => photo.id === photos[i].id);
      if (isAlreadyFavorite) {
        // If Yes: REMOVE it (Keep everything that does NOT match this ID)
        freshFavorites = freshFavorites.filter(photo => photo.id !== photos[i].id);
        likeButton.innerHTML = '&#9825';
      } else {
        // If No: ADD it
        freshFavorites.push(photos[i]);
        likeButton.innerHTML = '&#9829';
      }
      localStorage.setItem('favoritePhotos', JSON.stringify(freshFavorites));
    });
    img.src = photos[i].urls.small;
    img.alt = photos[i].alt_description;

    photoContainer.appendChild(img);
    photoContainer.appendChild(likeButton);
    gallery.appendChild(photoContainer);
  }
}

function setNextPage(link) {
  const maybeNextPage = getNextRelUrl(link);
  if (maybeNextPage) {
    loadMore.classList.remove('hidden');
    nextPage = getNextRelUrl(link);
  } else {
    loadMore.classList.add('hidden');
  }
}

function constructFetchUrl(url, authenticate = true, queryParams) {
  let fetchUrl = url;
  if (authenticate) {
    // UNSPLASH_ACCESS_KEY is a vairable set up in the secret.js file (don't forget to add it when doing HW)
    fetchUrl = `${fetchUrl}?client_id=${UNSPLASH_ACCESS_KEY}`;
  }

  if (!!queryParams) {
    fetchUrl = `${fetchUrl}&${queryParams}`;
  }

  return fetchUrl;
}

function getNextRelUrl(linkHeader) {
  const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
  return match ? match[1] : null;
}

async function fetchData(url, authenticate = true, queryParams, params) {
  const fetchUrl = constructFetchUrl(url, authenticate, queryParams);
  try {
    const response = await fetch(fetchUrl, params);
    if (!response.ok) {
      console.log(response);
      throw Error(
        `Error fetching data, API returned ${response.status} status code.`,
      );
    }
    const body = await response.json();

    return { link: response.headers.get('Link'), photos: body };
  } catch (error) {
    console.error(error);
    errorMsg.textContent = 'An error occured';
    console.log(errorMsg);
    errorMsg.classList.remove('hidden');
  }
}

window.addEventListener('storage', (event) => {
  if (event.key === 'favoritePhotos') {
    renderGallery(allLoadedPhotos)
  }
})