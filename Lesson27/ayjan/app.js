/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

/* 
1. Create product page:
 - form with a submit button and submit event listener
 - add Post Request

 2. Main page:
  - list all product using GET request
  - Convert JS data into HTML elements
    - add update (http://localhost:3000/products/update?id=id) and delete buttons
    
  3. Update page:
    - get the id of the product to update
    - fetch the data of the product fist
    - allow user to update the data in the form
    - send PUT request
*/

const fetchProductsButton = document.getElementById("fetchProducts");
const cardContainer = document.getElementById("cardContainer");
const deleteStatusMessage = document.getElementById("deleteStatusMessage");

fetchProductsButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  fetch("https://dummyjson.com/products")
    .then((res) => {
      if (!res.ok)
        throw Error(`Failed fetching products data, error code: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      createProductElements(data.products);
    })
    .catch((error) =>
      console.error(`An error occured when fetching products. Error: ${error}`)
    );
});

function createProductElements(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const div = document.createElement("div");
    div.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.title;
    const img = document.createElement("img");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("alt", product.title);

    const description = document.createElement("p");
    description.textContent = product.description;

    const updateLink = document.createElement("a");
    updateLink.textContent = "Update";
    updateLink.classList.add("button", "button--success");
    updateLink.setAttribute("href", `./update.html?id=${product.id}`);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button", "button--danger");
    deleteButton.addEventListener("click", () => deleteProduct(product.id));

    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(description);
    div.appendChild(updateLink);
    div.appendChild(deleteButton);

    cardContainer.appendChild(div);
  }
}
function deleteProduct(id) {
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok)
        throw Error(
          `Failed deleteing product with id ${id}, error code: ${res.status}`
        );
      return res.json();
    })
    .then((data) => {
      // TODO: replace with output in HTML  (maybe a dialog or some kind of notification message)
      const deleteStatusMessage = document.getElementById("deleteStatusMessage");
      deleteStatusMessage.textContent = `Product with id: ${data.id} deleted successfully!`;
      deleteStatusMessage.classList.remove("status--error");
      deleteStatusMessage.classList.add("status--success");

      const cardToRemove = document
        .querySelector(`.card [data-product-id="${id}"]`)
        ?.closest(".card");
      if (cardToRemove) {
        cardToRemove.remove();
      }
      deleteStatusMessage.scrollIntoView({ behavior: "smooth", block: "start" });
    })
    .catch((err) => {
      deleteStatusMessage.textContent = `Error deleting product ${err.message}`;
      deleteStatusMessage.classList.remove("status--success");
      deleteStatusMessage.classList.add("status--error");
      console.error(`Delete error: ${err}`);
    });
}
