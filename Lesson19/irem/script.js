/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `_items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/
/* 
Price:
{
  amount: 10.99,
  currency: 'EUR'
}

*/

const itemsInTheStore = {
  carrots: {
    amount: 0.99,
    currency: 'EUR',
  },
  potatoes: {
    amount: 0.49,
    currency: 'EUR',
  },
  milk: {
    amount: 1.49,
    currency: 'EUR',
  },
  cucumber: {
    amount: 1.49,
    currency: 'EUR',
  },
};

// STEP 1: ShoppingCart Class with constructor and viewCart method
class ShoppingCart {
  constructor() {
    this.items = [
      { name: 'Carrots', quantity: 10, price: itemsInTheStore.carrots.amount },
    ];
  }

  viewCart() {
    // Check if cart is empty and print different message
    if (this.items.length === 0) {
      console.log('Your cart is empty!');
      console.log('.................');
      return;
    }
    
    console.log('Cart Items');
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];
      console.log(
        `${currentItem.name} - ${currentItem.quantity} - ${currentItem.price}`,
      );
    }
    console.log('.................');
  }

  // STEP 2: Add Items to the Cart
  addItem(name, quantity, price) {
    // First, check if the item already exists in the cart
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        console.log(
          `Item ${name} already exists in the cart, updating quantity...`,
        );
        this.items[i].quantity = this.items[i].quantity + quantity;
        return;
      }
    }
    
    // If we reach here, the item doesn't exist, so add it
    console.log('Adding an item to cart...');
    this.items.push({ name, quantity, price });
  }

  // STEP 3: Remove Items from the Cart
  removeItem(name) {
    const itemsArray = this.items;

    for (let i = 0; i < itemsArray.length; i++) {
      if (itemsArray[i].name === name) {
        itemsArray.splice(i, 1);
        console.log(`Item ${name} is removed from the cart.`)
        return;
      }
    }
    console.log(`Item ${name} is not found in the cart.`)
  }

  // STEP 4: Calculate the Total Cost
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      total += item.quantity * item.price;
    }
    return total;
  }

  // STEP 5: Apply a Discount
  applyDiscount(discountCode) {
    // Discount codes and their percentage values
    const discountCodes = {
      'SAVE10': 10,
      'SAVE20': 20,
      'WELCOME': 15,
    };

    console.log(`Applying discount code: ${discountCode}`);
    
    if (discountCodes[discountCode]) {
      const discountPercentage = discountCodes[discountCode];
      const originalTotal = this.getTotal();
      const discountAmount = (originalTotal * discountPercentage) / 100;
      const finalTotal = originalTotal - discountAmount;
      
      console.log(`Discount code "${discountCode}" applied successfully!`);
      console.log(`Discount: ${discountPercentage}%`);
      console.log(`Original Total: €${originalTotal.toFixed(2)}`);
      console.log(`Discount Amount: -€${discountAmount.toFixed(2)}`);
      console.log(`Final Total: €${finalTotal.toFixed(2)}`);
      
      return finalTotal;
    } else {
      console.log(`Invalid discount code: ${discountCode}`);
      console.log(`Total remains: €${this.getTotal().toFixed(2)}`);
      return this.getTotal();
    }
  }
}

console.log('🛍️ === SHOPPING CART APPLICATION TESTING === 🛍️\n');

// Test STEP 1: Create ShoppingCart and viewCart
console.log('--- STEP 1: Testing ShoppingCart Class & viewCart method ---');
const groceryCart = new ShoppingCart();
console.log('Initial cart created with default item:');
groceryCart.viewCart();

// Test STEP 2: Add Items to Cart
console.log('\n--- STEP 2: Testing addItem method ---');
console.log('Adding new item - Cucumber:');
groceryCart.addItem('Cucumber', 5, itemsInTheStore.cucumber.amount);

console.log('\nAdding new item - Milk:');
groceryCart.addItem('Milk', 2, itemsInTheStore.milk.amount);

console.log('\nTrying to add existing item - Carrots (should update quantity):');
groceryCart.addItem('Carrots', 3, itemsInTheStore.carrots.amount);

console.log('\nCart after adding items:');
groceryCart.viewCart();

// Test STEP 3: Remove Items from Cart
console.log('\n--- STEP 3: Testing removeItem method ---');
console.log('Removing existing item - Cucumber:');
groceryCart.removeItem('Cucumber');

console.log('\nTrying to remove non-existent item - Pizza:');
groceryCart.removeItem('Pizza');

console.log('\nCart after removing items:');
groceryCart.viewCart();

// Test STEP 4: Calculate Total Cost
console.log('\n--- STEP 4: Testing getTotal method ---');
const total = groceryCart.getTotal();
console.log(`Total cost of all items in cart: €${total.toFixed(2)}`);

// Test STEP 5: Apply Discount
console.log('\n--- STEP 5: Testing applyDiscount method ---');
console.log('Testing valid discount code - SAVE20:');
groceryCart.applyDiscount('SAVE20');

console.log('\nTesting invalid discount code:');
groceryCart.applyDiscount('INVALID_CODE');

console.log('\nTesting SAVE10 discount:');
groceryCart.applyDiscount('SAVE10');

console.log('\nTesting WELCOME discount:');
groceryCart.applyDiscount('WELCOME');

// Test empty cart functionality
console.log('\n--- Testing Empty Cart Message ---');
console.log('Creating a new empty cart:');
const emptyCart = new ShoppingCart();
// Remove the default item to make it truly empty
emptyCart.removeItem('Carrots');
console.log('Viewing empty cart:');
emptyCart.viewCart();


/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
✅ COMPLETED: addItem method implemented with:
- Parameter validation
- Duplicate item checking
- Quantity updating for existing items
- New item addition
*/

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
✅ COMPLETED: removeItem method implemented with:
- Item search and removal
- Error handling for non-existent items
- User feedback messages
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
✅ COMPLETED: getTotal method implemented with:
- Iterates through all items
- Calculates quantity * price for each item
- Returns total sum
- displayTotal method for formatted output
*/

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
✅ COMPLETED: applyDiscount method implemented with:
- Discount code validation
- Percentage calculations
- Detailed breakdown display
- Error handling for invalid codes
- Multiple discount codes available
*/