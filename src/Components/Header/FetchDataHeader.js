import thunder from "./img/rain-thunder.png";
import cloud from "./img/cloudy.png";
import rain from "./img/rainy.png";
import suncloud from "./img/sunny-cloudy.png";
import sunny from "./img/sunny.png";

export default function FetchDataHeader(props) {
  function emojiChecker(emoji) {
    if (emoji === "☀️") {
      return sunny;
    } else if (emoji === "🌤️") {
      return suncloud;
    } else if (emoji === "☁️") {
      return cloud;
    } else if (emoji === "🌧️") {
      return rain;
    } else {
      return thunder;
    }
  }

  return (
    <div className="title">
      <h1>{props.getWeather}°</h1>
      <h1>
        The weather is{" "}
        <img className="img-weather" src={emojiChecker(props.getCondition)} />
        {console.log(props.getCondition)}
        {console.log(props.getWeather)}
      </h1>
      <h1>{props.getGood}</h1>
    </div>
  );
}
