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
let recipes = [{
  name: "tarragon chicken",
  ingredients: ["chicken", "tarragon", "cream"],
  cookingTime: 40
},
{
  name: "mushroom soup",
  ingredients: ["mushroom", "onion", "cream"],
  cookingTime: 30
},
{
  name: "salad",
  ingredients: ["lettuce", "tomato", "cucumber"],
  cookingTime: 10
},
{
  name: "hummus",
  ingredients: ["chickpeas", "tahini", "lemon"],
  cookingTime: 15
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

  for (let recipe of recipes) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
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
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.log("Recipe already exists.Will not add.");
      return;
    }
  }
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  };
  recipes.push(newRecipe);
  console.log("Recipe added successfully.");
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
    if (recipes[i].name === name) {
      console.log(`Name: ${recipes[i].name}`);
      console.log(`Ingredients: ${recipes[i].ingredients.join(", ")}`);
      console.log(`Cooking Time: ${recipes[i].cookingTime} minutes`);
      return;
    }
    else {
      console.log("Recipe not found.");
    }
  }
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
    if (recipes[i].name === name) {
      recipes[i].ingredients === newIngredients;
      recipes[i].cookingTime === newCookingTime;
      console.log("Recipe updated successfully.");
      return;
    }
  }
  console.log("Recipe not found. Cannot update.");
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
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log("Recipe deleted successfully.");
      return;
    }
    else {
      console.log("Recipe not found. Cannot delete.");



    }

  }

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
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].includes(ingredient)) {
      console.log('Name; ${recipes[i].name} ');
    }
  }
}

function filterByMaxTime(maxMinutes) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      console.log(`Cooking Time: ${recipes[i].cookingTime} minutes`);
    }
  }
}






