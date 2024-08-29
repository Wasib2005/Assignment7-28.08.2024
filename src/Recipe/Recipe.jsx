import PropTypes from 'prop-types';

const Recipe = ({ recipe, wantList }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="border p-5 w-[350px] flex flex-col gap-2 justify-center text-left rounded-2xl">
      <img
        className="max-w-[300px] max-h-[200px] rounded-2xl"
        src={recipe_image}
        alt={recipe_name}
      />
      <h1 className="text-2xl font-bold text-black">{recipe_name}</h1>
      <p>{short_description}</p>
      <hr />
      <h1 className="text-xl text-black font-bold">Ingredients: {ingredients.length}</h1>
      <ul className="pl-8 list-disc">
        {ingredients.map((ingredient, i) => (
          <li className="" key={i}>
            {ingredient}
          </li>
        ))}
      </ul>
      <hr />
      <div className=" flex gap-5 ">
        <p className="flex gap-2 items-center">
          <img src="/src/assets/clock.svg" alt="" /> {preparing_time}
        </p>
        <p className="flex gap-2 items-center">
          <img src="/src/assets/calories.svg" alt="" /> {calories} calories
        </p>
      </div>
      <button
        onClick={() => wantList(recipe_id)}
        className="btn btn-success w-32 rounded-3xl"
      >
        Want to cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  wantList: PropTypes.func.isRequired
};

export default Recipe;
