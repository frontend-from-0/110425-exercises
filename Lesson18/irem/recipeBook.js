/*
===========================================================
  RECIPE BOOK APPLICATION
===========================================================
In this mini-project, you will create a simple Recipe Book 
to store and manage recipes.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex)
3. Conditionals (if-else)
4. CRUD operations (Create, Read, Update, Delete)
5. Extra challenge: Filter by ingredient or cooking time

Run this file in Node.js or the browser console to test.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Recipes
-----------------------------------------------------------
1. Create a variable 'recipes' with a suitable data type with a few starter recipes.
2. Each recipe  should have:
   - name (string)
   - ingredients (array of strings)
   - cookingTime (number, in minutes)
*/

let recipes = [
  {
    name: "Pasta",
    ingredients: ["pasta", "tomato", "garlic", "olive oil"],
    cookingTime: 20
  },
  {
    name: "Scrambled Eggs",
    ingredients: ["eggs", "milk", "butter", "salt"],
    cookingTime: 10
  },
  {
    name: "Pancakes",
    ingredients: ["flour", "milk", "eggs", "sugar", "baking powder"],
    cookingTime: 15
  },
  {
    name: "Turkish Tea",
    ingredients: ["tea leaves", "water", "sugar"],
    cookingTime: 5
  }
];

/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: Pasta
  Ingredients: pasta, tomato, garlic
  Cooking Time: 20 minutes
*/

function displayAllRecipes() {
  console.log("=== ALL RECIPES ===");
  if (recipes.length === 0) {
    console.log("No recipes found in the recipe book.");
    return;
  }
  
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log("---");
  }
}

/*
-----------------------------------------------------------
  STEP 3: Add a New Recipe
-----------------------------------------------------------
Function: addRecipe(name, ingredients, cookingTime)
- Checks if a recipe with the same name exists.
- If yes, log a warning and return.
- If not, add the new recipe and log success.
- ingredients should be an array like ['egg', 'milk', 'flour']
*/

function addRecipe(name, ingredients, cookingTime) {
  // Check if recipe already exists
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      console.log(`Warning: Recipe "${name}" already exists!`);
      return;
    }
  }
  
  // Add new recipe
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  };
  
  recipes.push(newRecipe);
  console.log(`Success: Recipe "${name}" has been added to the recipe book!`);
}

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      const recipe = recipes[i];
      console.log("=== RECIPE DETAILS ===");
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      return;
    }
  }
  console.log(`Recipe "${name}" not found in the recipe book.`);
}

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/

function updateRecipe(name, newIngredients, newCookingTime) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      console.log(`Success: Recipe "${name}" has been updated!`);
      return;
    }
  }
  console.log(`Error: Recipe "${name}" not found. Cannot update.`);
}

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      recipes.splice(i, 1);
      console.log(`Success: Recipe "${name}" has been deleted from the recipe book!`);
      return;
    }
  }
  console.log(`Error: Recipe "${name}" not found. Cannot delete.`);
}

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByIngredient(ingredient) {
  console.log(`=== RECIPES CONTAINING "${ingredient.toUpperCase()}" ===`);
  const matchingRecipes = [];
  
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      if (recipe.ingredients[j].toLowerCase().includes(ingredient.toLowerCase())) {
        matchingRecipes.push(recipe);
        break; // Found the ingredient, no need to check other ingredients
      }
    }
  }
  
  if (matchingRecipes.length === 0) {
    console.log(`No recipes found containing "${ingredient}".`);
  } else {
    for (let i = 0; i < matchingRecipes.length; i++) {
      const recipe = matchingRecipes[i];
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log("---");
    }
  }
}

function filterByMaxTime(maxMinutes) {
  console.log(`=== RECIPES TAKING ${maxMinutes} MINUTES OR LESS ===`);
  const quickRecipes = [];
  
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      quickRecipes.push(recipes[i]);
    }
  }
  
  if (quickRecipes.length === 0) {
    console.log(`No recipes found that take ${maxMinutes} minutes or less.`);
  } else {
    for (let i = 0; i < quickRecipes.length; i++) {
      const recipe = quickRecipes[i];
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log("---");
    }
  }
}

// ========================================
// TESTING THE RECIPE BOOK APPLICATION
// ========================================

console.log("🍳 WELCOME TO IREM'S RECIPE BOOK! 🍳\n");

// Display all initial recipes
displayAllRecipes();

// Test adding a new recipe
console.log("\n📝 ADDING NEW RECIPE...");
addRecipe("Menemen", ["eggs", "tomatoes", "peppers", "onion", "olive oil"], 12);

// Try adding duplicate recipe
console.log("\n📝 TRYING TO ADD DUPLICATE...");
addRecipe("Pasta", ["different", "ingredients"], 25);

// View a specific recipe
console.log("\n👀 VIEWING SPECIFIC RECIPE...");
viewRecipe("Menemen");

// View non-existent recipe
console.log("\n👀 VIEWING NON-EXISTENT RECIPE...");
viewRecipe("Pizza");

// Update a recipe
console.log("\n✏️ UPDATING RECIPE...");
updateRecipe("Turkish Tea", ["premium tea leaves", "filtered water", "honey"], 7);

// Delete a recipe
console.log("\n🗑️ DELETING RECIPE...");
deleteRecipe("Scrambled Eggs");

// Display all recipes after changes
console.log("\n📋 UPDATED RECIPE BOOK:");
displayAllRecipes();

// Filter by ingredient
console.log("\n🔍 FILTERING BY INGREDIENT 'eggs':");
filterByIngredient("eggs");

// Filter by cooking time
console.log("\n⏰ FILTERING BY MAX TIME 12 minutes:");
filterByMaxTime(12);

console.log("\n🎉 Recipe Book testing complete!");