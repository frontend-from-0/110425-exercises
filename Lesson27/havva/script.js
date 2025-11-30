const form = document.getElementById('createProductForm');

const title = document.getElementById('titleInput');

const description = document.getElementById('descriptionInput');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newProductData = {
    title: titleInput.value,
    description: descriptionInput.value,
  };
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProductData),
  })
    .then(res => {
      if (!res.ok)
        throw Error(
          `Failed adding a new product, error code: ${res.status}`,
        );
      return res.json();
    })
    .then(data => {
      console.log(data);
      form.reset();
      alert('Product successfully created!')
    })
    .catch(error => {
      console.error('New product is not created.', error);
    });
});