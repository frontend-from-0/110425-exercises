let savedFavorites = JSON.parse(localStorage.getItem('favoritePhotos'));
const result = savedFavorites || [];

const favorites = document.getElementById('favorites-container');
const backToMainPage = document.getElementById('backToMainPage');

backToMainPage.addEventListener('click', () => {
  window.open('index.html', target = '_blank')
});


function renderFavorites() {
  favorites.innerHTML = '';
  let latestFavorites = JSON.parse(localStorage.getItem('favoritePhotos')) || [];

  if (latestFavorites.length > 0) {
    favorites.classList.remove('hidden');
  } else {
    favorites.classList.add('hidden');
  }

  latestFavorites.forEach(photo => {
    const img = document.createElement('img');
    const removeBtn = document.createElement('button');
    const photoContainer = document.createElement('div')

    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    removeBtn.innerHTML = '&#9829';

    photoContainer.appendChild(img);
    photoContainer.appendChild(removeBtn);
    favorites.appendChild(photoContainer);

    removeBtn.addEventListener('click', async () => {
      latestFavorites = latestFavorites.filter(item => item.id !== photo.id);
      localStorage.setItem('favoritePhotos', JSON.stringify(latestFavorites));
      img.remove();
      removeBtn.remove();
    })
  })
}

renderFavorites();
window.addEventListener('storage', renderFavorites);
