const express = require("express");

const app = express();

const { recipes } = require("./data");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

app.get("/api/v1/recipes", (req, res) => {
  const { search } = req.query;
  if (!search) {
    return res.json(recipes);
  }

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeNameIncludes = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const ingredientsInclude = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(search.toLowerCase())
    );

    return recipeNameIncludes || ingredientsInclude;
  });

  if (filteredRecipes.length === 0) {
    return res
      .status(404)
      .json({ message: "Parola chiave non trovata nelle mie ricette" });
  }

  res.json(filteredRecipes);
});

app.get("/api/v1/quick-recipes", (req, res) => {
  const quickRecipes = recipes.map((recipe) => {
    const { name, ingredients, instructions } = recipe;
    return { name, ingredients, instructions };
  });
  res.json(quickRecipes);
});

app.get("/api/v1/recipes/:recipeId", (req, res) => {
  const { recipeId } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(recipeId));
  if (!recipe) {
    return res.status(404).json({ message: "Ricetta non trovata" });
  }
  res.json(recipe);
});

app.listen(3001, () => {
  console.log("server attivo");
});
