
const url = 'https://jsonplaceholder.typicode.com/posts';

const postContainer = document.getElementById('posts-container');


async function loadPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    const topTenPosts = posts.slice(0, 10);
    topTenPosts.forEach(post => {
      createPostElements(post)
    });
  }
  catch (error) {
    console.log('Error loading posts:', error);
  }
}

function createPostElements(post) {
  const postDiv = document.createElement('div');
  const title = document.createElement('h2');
  const body = document.createElement('p');
  const deleteBtn = document.createElement('button');

  postDiv.classList.add('post-card');
  title.innerText = post.title;
  body.innerText = post.body;
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', () => {
    fetch(url + '/' + post.id, {
      method: 'DELETE',
    })
    postDiv.remove();
  });
  postDiv.appendChild(title);
  postDiv.appendChild(body);
  postDiv.appendChild(deleteBtn);
  postContainer.appendChild(postDiv);
}

loadPosts();
