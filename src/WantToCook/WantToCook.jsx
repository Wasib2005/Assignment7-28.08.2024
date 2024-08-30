import PropTypes from "prop-types";
import Table from "./Table/Table";
import { useState } from "react";

const WantToCook = ({ cookingRecipe }) => {

    const [totalCalories,setTotalCalories] = useState(0)
    const [totalAmount,setTotalAmount] = useState(0)
    const [totalTime,setTotalTime] = useState(0)



  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-xl font-bold">Want To Cook</h1>
        <table className="table table-zebra">
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
              <Table key={element.ID} element={element}></Table>
            ))}
          </tbody>
          <tfoot>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>{totalCalories}</th>
            <th>{totalAmount}</th>
            <th>{totalTime}</th>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  cookingRecipe: PropTypes.array,
};

export default WantToCook;
