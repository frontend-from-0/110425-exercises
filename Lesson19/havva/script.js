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

const discountRates = {
  'SAVE10': 0.90,
  'SAVE20': 0.80,
  'SAVE30': 0.70,
}


class ShoppingCart {
  constructor() {
    this.items = [
      { name: 'Carrots', quantity: 10, price: itemsInTheStore.carrots.amount },
    ];
  }

  viewCart() {
    // TODO: print a different message if the cart is empty
    console.log('Cart Items');
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];
      console.log(
        `${currentItem.name} - ${currentItem.quantity} - ${currentItem.price}`,
      );
    }
    console.log('.................');
  }

  addItem(name, quantity, price) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        console.log(
          `Item ${name} already exists in the cart, updating quantity...`,
        );
        this.items[i].quantity = this.items[i].quantity + quantity;
        return;
      } else {
        console.log('Adding an item to cart...');
        this.items.push({ name, quantity, price });
        return;
      }
    }
  }

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

  getTotal() {
    let sumTotal = 0;
    for (let i = 0; i < this.items.length; i++) {
      sumTotal += this.items[i].price * this.items[i].quantity;
    }
    return sumTotal;
  }

  applyDiscount(discountcode) {
    const currentTotal = this.getTotal();
    const discountRate = discountRates[discountcode];
    if (discountRate) {
      let discountedPrice = currentTotal * discountRate;
      console.log('Discount is applied!');
      console.log(`Your current total cost is: ${currentTotal.toFixed(2)}`);
      console.log(`Your total cost with discount code is: ${discountedPrice.toFixed(2)}`);
    } else {
      console.log(`Your discount code ${discountcode} is invalid`);
    }
  }
}

const groceryCart = new ShoppingCart();
groceryCart.viewCart();

groceryCart.addItem('Cucumber', 20, itemsInTheStore.cucumber.amount);
groceryCart.addItem('Carrots', 2, itemsInTheStore.carrots.amount);

groceryCart.viewCart();

groceryCart.removeItem(`Cucumber`);
groceryCart.viewCart();

console.log(groceryCart.getTotal());

groceryCart.applyDiscount('SAVE10');

groceryCart.applyDiscount('SAVE20');

groceryCart.applyDiscount('SAVE30');

/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `_items` array.
*/

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `_items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
