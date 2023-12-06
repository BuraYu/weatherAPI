import { uid } from "uid";
import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [activityName, setActivityName] = useState("");
  const [isGoodWeatherActivity, setIsGoodWeatherActivity] = useState(false);

  const handleCheckboxChange = () => {
    setIsGoodWeatherActivity(!isGoodWeatherActivity);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(activityName, isGoodWeatherActivity);
    setActivityName("");
    setIsGoodWeatherActivity(false);
  };

  return (
    <>
      <h3 className="form-header">Add new activity</h3>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="inputActivity"
          placeholder="Activity"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          required
        />
        <label className="container">
          Good-weather activity
          <input
            type="checkbox"
            name="checkbox"
            checked={isGoodWeatherActivity}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
