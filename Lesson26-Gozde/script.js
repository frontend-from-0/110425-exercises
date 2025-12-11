const container = document.getElementById('postsContainer');

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;

      const postBody = document.createElement('p');
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deletePost(post.id, postDiv);
      });

      postDiv.appendChild(deleteButton);
      container.appendChild(postDiv);
    });
  })
  .catch((error) => {
    console.error('Error fetching posts:', error);
  });


function deletePost(postId, element) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        element.remove();
        console.log(`Post with ID ${postId} deleted successfully.`);
      } else {
        console.error('Failed to delete the post.');
      }
    })
    .catch((error) => {
      console.error('Error deleting post:', error);
    });
}