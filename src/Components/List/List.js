import { uid } from "uid";
import { useEffect, useState } from "react";

const List = ({
  activityList,
  setActivityList,
  goodWeatherOnly,
  handleDelete,
}) => {
  const filteredList = goodWeatherOnly
    ? activityList.filter((activity) => activity.goodWeatherActivity === true)
    : activityList.filter((activity) => activity.goodWeatherActivity === false);

  return (
    <ul className="activityList">
      {filteredList.map(({ id, nameOfActivity, goodWeatherActivity }) => (
        <div className="ul-li-container">
          <li className="listElement" key={id} onClick={() => handleDelete(id)}>
            {nameOfActivity} - Weather activity:{" "}
            {goodWeatherActivity ? "Good" : "Meh"}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default List;
