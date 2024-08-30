import PropTypes from "prop-types";
import Table from "./Table/Table";

const WantToCook = ({ cookingRecipe, wantList }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-xl font-bold">Want To Cook</h1>
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
      <button className="btn btn-success w-[90%] text-xl font-bold">
        Start Cooking
      </button>
    </div>
  );
};

WantToCook.propTypes = {
  cookingRecipe: PropTypes.array,
  setCookingRecipe: PropTypes.func,
  wantList: PropTypes.func.isRequired,
};

export default WantToCook;
