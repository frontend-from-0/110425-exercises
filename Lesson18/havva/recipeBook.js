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

let recipes = [{ name: "Chocolate Cake", ingredients: ["flour", "sugar", "cocoa"], cookingTime: 45 },
{ name: "Alfredo", ingredients: ["pasta", "cream", "parmesan"], cookingTime: 30 },
{ name: "Caesar Salad", ingredients: ["lettuce", "croutons", "parmesan"], cookingTime: 15 }];



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
  console.log('Recipes in the Recipe Book');

  for (const recipe of recipes) {
    console.log(`Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, Cooking Time: ${recipe.cookingTime}`);
  }
}

displayAllRecipes();

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
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      console.log('A recipe with this name already exists.');
      return;
    }
  }
  recipes.push({ name, ingredients, cookingTime });
  console.log('Recipe added successfully.');
}

addRecipe("Pasta", ["pasta", "tomato", "garlic"], 20);
addRecipe("Kruvasan", ["flour", "butter", "salt"], 40);
addRecipe("Cheesecake", ["flour", "sugar", "cheese"], 30);
displayAllRecipes();

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
      console.log(`Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients}, Cooking Time: ${recipes[i].cookingTime} minutes`);
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
}

viewRecipe("Pasta");
viewRecipe("Pizza");
viewRecipe("Chocolate Cake");
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
      console.log('Recipe updated successfully.');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
}

updateRecipe("Pasta", ["pasta", "tomato", "basil"], 25);
viewRecipe("Pasta");
updateRecipe("Pizza", ["dough", "tomato", "cheese"], 20);

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
      console.log('Recipe deleted successfully.');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
}

deleteRecipe("Caesar Salad");
displayAllRecipes();
deleteRecipe("Pizza");
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
  return recipes.filter(recipe => {
    return recipe.ingredients.some(recipeIngredient => {
      return recipeIngredient.toLowerCase() === ingredient.toLowerCase();
    });
  });
}

console.log(filterByIngredient("flour"));

function filterByMaxTime(maxMinutes) {
  return recipes.filter(recipe => recipe.cookingTime <= maxMinutes);
}

console.log(filterByMaxTime(50));
console.log(filterByMaxTime(40));
