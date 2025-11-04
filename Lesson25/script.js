/* 

TODO:
0. Select buttons and product quantities, and total price and store them in variables
1. Add event listenter to the button with type click
2. When event listener is triggered, increase quantity of the product in the cart
*/

const totalPrice = document.getElementById('total_price');

function createProductStructure(productName) {
  return {
    quantity: `${productName}_quantity`,
    cartInfo: `${productName}_cart`,
    add: `${productName}_add`,
    increment: `${productName}_increment`,
    decrement: `${productName}_decrement`,
    remove: `${productName}_remove`,
  };
}

const data = {
  apples: {
    elementIds: {},
    elements: {},
  },
  bananas: {
    elementIds: {},
    elements: {},
  },
  bread: {
    elementIds: {},
    elements: {},
  },
  eggs: {
    elementIds: {},
    elements: {},
  },
};

const products = Object.keys(data);
for (let i = 0; i < products.length; i++) {
  const productStructure = createProductStructure(products[i]);
  data[products[i]].elementIds = productStructure;

  const productElements = {};
  for (const key in productStructure) {
    productElements[key] = document.getElementById(productStructure[key]);
  }
  data[products[i]].elements = productElements;
}



for (let i = 0; i < products.length; i++) {
  const productElements = data[products[i]].elements;

  productElements.add.addEventListener('click', () => {
    incrementProductQuantity(
      productElements.quantity,
      productElements.decrement,
    );
    productElements.cartInfo.classList.remove('hidden');
  });

  // add event listener for increment button

  // add event listener for decrement button

  // applesIncrement.addEventListener('click', () =>
  //   incrementProductQuantity(applesElements.quantity, applesElements.decrement),
  // );
  // applesDecrement.addEventListener('click', () =>
  //   decrementProductQuantity(applesElements.quantity, applesElements.decrement),
  // );

  productElements.remove.addEventListener('click', () => {
    handleRemove(productElements.quantity, productElements.cartInfo);
  });
}

function incrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentPrice = Number(totalPrice.innerText);

  if (currentQuantity >= 1) {
    decrementButton.disabled = false;
    decrementButton.classList.replace('bg-gray-50', 'bg-gray-200');
  }
  currentQuantity++;
  currentPrice += 5;

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentPrice;
}

function decrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentTotalPrice = Number(totalPrice.innerText);

  if (currentQuantity === 1) {
    return;
  } else {
    currentQuantity--;
    if (currentQuantity <= 1) {
      decrementButton.disabled = true;
      decrementButton.classList.replace('bg-gray-200', 'bg-gray-50');
    }
    currentTotalPrice -= 5;
  }

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentTotalPrice;
}

function handleRemove(productQuantitySpan, productCartInfo) {
  const currentQuantity = Number(productQuantitySpan.innerText);
  const currentTotalPrice = Number(totalPrice.innerText);
  const currentProductPrice = currentQuantity * 5;
  const updatedTotalPrice = currentTotalPrice - currentProductPrice;

  productQuantitySpan.innerText = 0;
  totalPrice.innerText = updatedTotalPrice;

  productCartInfo.classList.add('hidden');
}

// const products = [
//   {
//     quantity: 'apples_quantity',
//     cartInfo: 'apples_cart',
//     actions: {
//       add: 'apples_add',
//       increment: 'apples_increment',
//       decrement: 'apples_decrement',
//       remove: 'apples_remove',
//     },
//   },
//   {
//     quantity: 'bananas_quantity',
//     cartInfo: 'bananas_cart',
//     actions: {
//       add: 'bananas_add',
//       increment: 'bananas_increment',
//       decrement: 'bananas_decrement',
//       remove: 'bananas_remove',
//     },
//   },
// ];

// const productsV2 = {
//   apples: {
//     quantity: 'apples_quantity',
//     cartInfo: 'apples_cart',
//     actions: {
//       add: 'apples_add',
//       increment: 'apples_increment',
//       decrement: 'apples_decrement',
//       remove: 'apples_remove',
//     },
//   }
// }
