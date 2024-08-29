import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookingRecipe, setCookingRecipe] = useState([]);

  useEffect(() => {
    fetch("Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  const wantList = (recipeId) => {
    setCookingRecipe(() => [...cookingRecipe, recipeId]);
  };

  return (
    <div id="OurRecipes" className="mt-20 w-[640px] md:w-[1280px] m-auto">
      <h1 className="text-4xl font-bold">Options</h1>
      <p className="w-[800px] m-auto mt-7">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex justify-around">
        <div className="flex items-center justify-around">
          <div className="grid grid-cols-2 gap-4 max-w-[1280px]">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                wantList={wantList}
              ></Recipe>
            ))}
          </div>
          <div></div>
        </div>
        <div>
          <WantToCook cookingRecipe={cookingRecipe}></WantToCook>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
