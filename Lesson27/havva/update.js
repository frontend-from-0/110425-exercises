const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const updateForm = document.getElementById('updateProductForm');

const params = new URLSearchParams(document.location.search);
const id = params.get('id');
console.log(id);

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => {
    if (!res.ok)
      throw Error(`Failed fetching products data, error code: ${res.status}`);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    populateForm(data);
  })
  .catch((error) =>
    console.error(`An error occured when fetching products. Error: ${error}`),
  );

function populateForm(productData) {
  titleInput.value = productData.title;
  descriptionInput.value = productData.description;
}

updateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newProductData = {
    title: titleInput.value,
    description: descriptionInput.value,
  }
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProductData),
  })
    .then((res) => {
      if (!res.ok)
        throw Error(
          `Failed updating the product with id ${id}, error code: ${res.status}`,
        );
      return res.json();
    })
    .then(data => {
      console.log(data);
      alert('The product is updated!');
      sessionStorage.setItem('refreshProducts', 'true');
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error(error)
    })
});