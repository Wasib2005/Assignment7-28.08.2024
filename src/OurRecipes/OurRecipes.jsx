import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";
import PropTypes from "prop-types";
const OurRecipes = ({ handleButtonClick }) => {
  const [recipes, setRecipes] = useState([]);
  const [cookingRecipe, setCookingRecipe] = useState([]);

  useEffect(() => {
    fetch("Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  const wantList = (Name, Id, Time, Calories, PlNe = 1) => {
    const checkRecipe = cookingRecipe.find((element) => {
      return element.Name === Name;
    });

    if (checkRecipe) {
      if (PlNe) {
        checkRecipe.amount = checkRecipe.amount + 1;
        handleButtonClick(`${checkRecipe.Name} 1 unit added`);
        setCookingRecipe([...cookingRecipe]);
      } else if (checkRecipe.amount !== 1) {
        checkRecipe.amount = checkRecipe.amount - 1;
        handleButtonClick(`${checkRecipe.Name} 1 unit remove`);

        setCookingRecipe([...cookingRecipe]);
      } else {
        const newCookingRecipe = cookingRecipe.filter(
          (item) => item !== checkRecipe
        );
        handleButtonClick(`${checkRecipe.Name} 1 unit added`);

        setCookingRecipe(newCookingRecipe);
      }
    } else {
      handleButtonClick('New item added')
      setCookingRecipe([...cookingRecipe,{ Name: Name, ID: Id, amount: 1, Time: Time, Calories: Calories },]
    );
    }
  };
  return (
    <div id="OurRecipes" className="mt-20 w-[640px] md:w-[1300px] m-auto">
      <h1 className="text-4xl font-bold">Options</h1>
      <p className="w-[800px] m-auto mt-7">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="md:flex justify-around">
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
        <div className=" relative">
          <WantToCook
            cookingRecipe={cookingRecipe}
            setCookingRecipe={setCookingRecipe}
            wantList={wantList}
            handleButtonClick = {handleButtonClick}
          ></WantToCook>
        </div>
      </div>
    </div>
  );
};
OurRecipes.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
export default OurRecipes;
