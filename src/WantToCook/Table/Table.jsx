import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Table = ({ element }) => {

  const [totalTime, setTotalTime] = useState(0);
  useEffect(() => {
    setTotalTime(element.Time*element.amount);
  }, [element.amount]);
  return (
    <tr>
      <th>{element.ID}</th>
      <td>{element.Name}</td>
      <td>{element.Time}</td>
      <td>{element.Calories}</td>
      <td>{element.amount}</td>
      <td>{totalTime}</td>
    </tr>
  );
};

Table.propTypes = {
  element: PropTypes.object,
};

export default Table;
