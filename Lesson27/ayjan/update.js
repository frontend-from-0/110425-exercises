const title = document.getElementById("title");
const description = document.getElementById("description");
const updateForm = document.getElementById("updateProductForm");
const statusMessage = document.getElementById("statusMessage");

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => {
    if (!res.ok)
      throw Error(`Failed fetching product data, error code: ${res.status}`);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    title.value = data.title;
    description.value = data.description;
  })
  .catch((error) =>
    console.error(`An error occured when fetching product. Error: ${error}`)
  );

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const updatedProduct = {
    title: title.value,
    description: description.value,
  };
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((res) => {
      if (!res.ok)
        throw Error(`Failed updating product, error code: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      statusMessage.textContent = `Product with id: ${data.id} updated successfully!`;
      statusMessage.classList.remove("status--error");
      statusMessage.classList.add("status--success");
      console.log("Updated product data:", data);

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    })
    .catch((error) => {
      statusMessage.textContent = `Error updating product: ${error.message}`;
      statusMessage.classList.remove("status--success");
      statusMessage.classList.add("status--error");
      console.error("Update error:", error);
    });
});
