import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Total = ({ cookedRecipe }) => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    let newTotalTime = 0;
    let newTotalCalories =0;

    for (let index = 0; index < cookedRecipe.length; index++) {
        const element = cookedRecipe[index];
        newTotalTime += (element.Time*element.amount)
        newTotalCalories += (element.Calories*element.amount)
        console.log(element.Time)
    }
    setTotalTime(newTotalTime)
    setTotalCalories(newTotalCalories)
  }, [cookedRecipe]);
  return (
    <div className="flex flex-col gap-2 mt-2 text-right">
      <h3>Total Calories :{totalCalories}</h3>
      <h3>Total Time Needed: {totalTime}</h3>
    </div>
  );
};

Total.propTypes = {
  cookedRecipe: PropTypes.array,
};

export default Total;
