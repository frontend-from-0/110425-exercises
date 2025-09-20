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
const recipes = [
  {
    name: "Pizza",
    ingredients: ["dough", "tomato sauce", "cheese"],
    cookingTime: 30,
  },
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
  console.log("Recipe from Recipes");
  for (let i = 0; i < recipes.length; i++) {
    console.log(`Name: ${recipes[i].name}`);
    console.log(`Ingredients: ${recipes[i].ingredients.join(", ")}`);
    console.log(`Cooking Time: ${recipes[i].cookingTime} minutes`);
    
  }
}
displayAllRecipes();
console.log("---------------------------");
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
      console.log(`Recipe with the same name ${name} already exists.`);
      return;
    }
  }
  recipes.push({ name, ingredients, cookingTime });
  console.log(`Recipe ${name} added successfully.`);
}
addRecipe("Pasta", ["pasta", "tomato", "garlic"], 20);
displayAllRecipes();

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name){
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.log(`Recipe found: ${name}`);
    return;
}
  }
  console.log(`Recipe with the name ${name} not found.`);
}
viewRecipe("Pasta");
viewRecipe("Burger");
viewRecipe("Pizza");
console.log("---------------------------");
/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/ function updateRecipe(name, newIngredients, newCookingTime){
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes[i]={name, ingredients: newIngredients, cookingTime: newCookingTime};
      console.log(`Recipe ${name} updated successfully.`);
      return;
    }
}
  console.log(`Recipe with the name ${name} not found.`);
}
updateRecipe("Pasta", ["pasta", "tomato", "basil"], 25);
updateRecipe("Burger", ["bun", "patty", "lettuce"], 15);
displayAllRecipes();
console.log("---------------------------");
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name){
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log(`Recipe ${name} deleted successfully.`);
      return;
    }
}
  console.log(`Recipe with the name ${name} not found.`);
}
deleteRecipe("Pasta");
deleteRecipe("Burger");
displayAllRecipes();
console.log("---------------------------");
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
  return recipes.filter(recipe => recipe.ingredients.includes(ingredient));
}

function filterByMaxTime(maxMinutes) {
  return recipes.filter(recipe => recipe.cookingTime <= maxMinutes);
}

console.log(filterByIngredient("tomato"));
console.log(filterByIngredient("cheese")); 

console.log(filterByMaxTime(25));
console.log(filterByMaxTime(15));
console.log("---------------------------");