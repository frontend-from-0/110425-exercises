
/* TODO:
0. Select buttons and product quantities, and total price and store them in variables
1. Add event listenter to the button with type click
2. When event listener is triggered, increase quantity of the product in the cart
*/

/* 
Lesson 25: Shopping Cart Application - 

COMPLETED FEATURES:
✅ Add items to cart with quantity 1
✅ Increment/decrement quantities with +/- buttons  
✅ Remove individual items from cart
✅ Clear entire cart functionality
✅ Real-time price calculation ($5 per item)
✅ Proper cart visibility (items show/hide correctly)
✅ Button state management (disabled when appropriate)

FIXES APPLIED:
- Fixed negative price bug when decrementing empty cart
- Added increment/decrement buttons for Bread and Eggs products  
- Set proper initial state (quantities=0, cart hidden, total=$0)
- Added protection against adding duplicate items to cart
- Implemented proper button state management for decrement buttons

DEBUG FEATURES:
- Console.log statements for troubleshooting cart operations
- Element verification during initialization
*/

const totalPrice = document.getElementById('total_price');
const clearCartButton = document.getElementById('clear_cart');

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

  // ADD TO CART FUNCTIONALITY
  // FIX: Only add items if they're not already in cart (prevents duplicate additions)
  productElements.add.addEventListener('click', () => {
    console.log('Add to cart clicked for', products[i]);
    console.log('Current quantity before:', productElements.quantity.innerText);
    console.log('Cart hidden before:', productElements.cartInfo.classList.contains('hidden'));
    
    // Only add if item is not already in cart (cart is hidden)
    if (productElements.cartInfo.classList.contains('hidden')) {
      // Set quantity to 1 (not increment from 0)
      productElements.quantity.innerText = '1';
      let currentPrice = Number(totalPrice.innerText);
      totalPrice.innerText = currentPrice + 5;
      
      // Enable decrement button and update its styling
      productElements.decrement.disabled = false;
      productElements.decrement.classList.replace('bg-gray-50', 'bg-gray-200');
      
      // Show the cart item
      productElements.cartInfo.classList.remove('hidden');
      
      console.log('After adding - quantity:', productElements.quantity.innerText);
      console.log('After adding - total:', totalPrice.innerText);
      console.log('After adding - cart hidden:', productElements.cartInfo.classList.contains('hidden'));
    } else {
      console.log('Item already in cart, not adding again');
    }
  });

  // add event listener for increment button
  productElements.increment.addEventListener('click', () => {
    // Only allow incrementing if the item is in the cart (not hidden)
    if (!productElements.cartInfo.classList.contains('hidden')) {
      incrementProductQuantity(
        productElements.quantity,
        productElements.decrement
      );
    }
  });

  // add event listener for decrement button
  productElements.decrement.addEventListener('click', () => {
    // Only allow decrementing if the item is in the cart (not hidden)
    if (!productElements.cartInfo.classList.contains('hidden')) {
      decrementProductQuantity(
        productElements.quantity,
        productElements.decrement
      );
    }
  });

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

// INCREMENT QUANTITY FUNCTION
// Increases item quantity by 1 and updates total price
function incrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentPrice = Number(totalPrice.innerText);

  // Enable decrement button once quantity is >= 1
  if (currentQuantity >= 1) {
    decrementButton.disabled = false;
    decrementButton.classList.replace('bg-gray-50', 'bg-gray-200');
  }
  
  // Increase quantity and add $5 to total
  currentQuantity++;
  currentPrice += 5;

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentPrice;
}

// DECREMENT QUANTITY FUNCTION
// FIX: Prevents negative quantities and prices
// Decreases item quantity by 1 but stops at quantity 1 (doesn't go to 0)
function decrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentTotalPrice = Number(totalPrice.innerText);

  // IMPORTANT FIX: Don't allow decrementing below 1, prevents negative prices
  if (currentQuantity <= 1) {
    return; // Exit function if quantity is already 1 or less
  } else {
    // Decrease quantity and subtract $5 from total
    currentQuantity--;
    currentTotalPrice -= 5;
    
    // If quantity reaches 1, disable the decrement button
    if (currentQuantity <= 1) {
      decrementButton.disabled = true;
      decrementButton.classList.replace('bg-gray-200', 'bg-gray-50');
    }
  }

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentTotalPrice;
}

// REMOVE ITEM FUNCTION
// Completely removes an item from cart and resets its state
function handleRemove(productQuantitySpan, productCartInfo) {
  const currentQuantity = Number(productQuantitySpan.innerText);
  const currentTotalPrice = Number(totalPrice.innerText);
  const currentProductPrice = currentQuantity * 5;
  const updatedTotalPrice = currentTotalPrice - currentProductPrice;

  // Reset item state: quantity to 0, hide from cart, update total
  productQuantitySpan.innerText = 0;
  totalPrice.innerText = updatedTotalPrice;
  productCartInfo.classList.add('hidden');
  
  // FIX: Reset decrement button to disabled state when item is removed
  const decrementButton = productCartInfo.querySelector('[id$="_decrement"]');
  if (decrementButton) {
    decrementButton.disabled = true;
    decrementButton.classList.add('bg-gray-50');
    decrementButton.classList.remove('bg-gray-200');
  }
}

// Initialize decrement buttons to disabled state and verify elements
for (let i = 0; i < products.length; i++) {
  const productElements = data[products[i]].elements;
  

  console.log(`Initializing ${products[i]}:`, {
    quantity: productElements.quantity ? productElements.quantity.innerText : 'NOT FOUND',
    cartVisible: productElements.cartInfo ? !productElements.cartInfo.classList.contains('hidden') : 'NOT FOUND'
  });
  
  // Set decrement buttons to disabled state initially (since quantities start at 0)
  if (productElements.decrement) {
    productElements.decrement.disabled = true;
    productElements.decrement.classList.add('bg-gray-50');
    productElements.decrement.classList.remove('bg-gray-200');
  }
}

// CLEAR CART FUNCTIONALITY
// Removes all items from cart and resets everything to initial state
clearCartButton.addEventListener('click', () => {
  for (let i = 0; i < products.length; i++) {
    const productElements = data[products[i]].elements;
    
    // Use handleRemove to properly reset each item
    handleRemove(productElements.quantity, productElements.cartInfo);
    
    // FIX: Ensure decrement buttons are properly disabled after clearing
    productElements.decrement.disabled = true;
    productElements.decrement.classList.add('bg-gray-50');
    productElements.decrement.classList.remove('bg-gray-200');
  }
});

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
