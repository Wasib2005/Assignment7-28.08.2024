import PropTypes from "prop-types";
import Table from "./Table/Table";
import { useState } from "react";

const WantToCook = ({ cookingRecipe, wantList, setCookingRecipe }) => {
  const [cookedRecipe, setCookedRecipe] = useState([]);
  const cooked = () => {
    setCookedRecipe([...cookingRecipe]);
    setCookingRecipe([]);
    console.log(cookedRecipe);
  };
  return (
    <div className=" sticky top-0 ">
      <div className="overflow-x-auto">
        <h1 className="text-xl font-bold">
          Want To Cook: {cookingRecipe.length} Recipes
        </h1>
        <table className="table table-zebra text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Per. Time</th>
              <th>Per. Calories</th>
              <th>Amount</th>
              <th>Total Time</th>
            </tr>
          </thead>
          <tbody>
            {cookingRecipe.map((element) => (
              <Table
                key={element.ID}
                element={element}
                wantList={wantList}
              ></Table>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          cooked();
        }}
        className="btn btn-success w-[90%] text-xl font-bold"
      >
        Start Cooking
      </button>
      <h1 className="text-xl font-bold">Cooking {cookedRecipe.length} Recipes</h1>
      <table className="table table-zebra text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Time Needed</th>
          </tr>
        </thead>

          {cookedRecipe.map((element) => (
            <tbody key={element.ID}>
              <th>{element.ID}</th>
              <th>{element.Name}</th>
              <th>Cooking</th>
              <th>{element.amount}</th>
              <th>{element.Time}</th>
            </tbody>
            
          ))}

      </table>
    </div>
  );
};

WantToCook.propTypes = {
  cookingRecipe: PropTypes.array,
  setCookingRecipe: PropTypes.func,
  wantList: PropTypes.func.isRequired,
};

export default WantToCook;
