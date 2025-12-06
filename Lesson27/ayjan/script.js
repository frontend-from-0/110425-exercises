const title = document.getElementById("title");
const description = document.getElementById("description");
const statusMessage = document.getElementById("statusMessage");
const form = document.getElementById("createProductForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProduct = {
    title: title.value,
    description: description.value,
  };
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })
    .then((res) => {
      if (!res.ok)
        throw Error(`Failed creating product, error code: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      statusMessage.textContent = `Product with id: ${data.id} created successfully!`;
      statusMessage.classList.remove("status--error");
      statusMessage.classList.add("status--success");
      form.reset();
      console.log("Created product data:", data);
    })
    .catch((error) => {
      statusMessage.textContent = `Error creating product: ${error.message}`;
      statusMessage.classList.remove("status--success");
      statusMessage.classList.add("status--error");
      console.error(`An error occured when creating product. Error: ${error}`);
    });
});
