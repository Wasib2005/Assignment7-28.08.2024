import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const PlNe = 0;

const Table = ({ element, wantList }) => {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const newTime = element.Time * element.amount;

    setTotalTime(newTime);
  }, [element.amount]);

  return (
    <tr>
      <th>{element.ID}</th>
      <td>{element.Name}</td>
      <td>{element.Time}</td>
      <td>{element.Calories}</td>
      <td className="flex items-center gap-1">
        <button
          onClick={() => {
            wantList(
              element.Name,
              element.ID,
              element.Time,
              element.Calories,
              PlNe
            );
          }}
          className="btn btn-ghost"
        >
          -
        </button>
        <p>{element.amount}</p>

        <button
          onClick={() => {
            wantList(element.Name, element.ID, element.Time, element.Calories);
          }}
          className="btn btn-ghost"
        >
          +
        </button>
      </td>
      <td>{totalTime}</td>
    </tr>
  );
};

Table.propTypes = {
  element: PropTypes.object,
  wantList: PropTypes.func,
};

export default Table;
