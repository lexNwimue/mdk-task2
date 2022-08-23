import "./App.css";
import { useEffect, useState } from "react";

import Condition from "./components/Condition";
import Form from "./components/Form";

import { getWeatherData } from "./services/getData";

const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState("Loading");
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const sideEffect = async () => {
      let data = await getWeatherData();
      setTemperature(data.current.temp_c);
      setWeather(data.current.condition.text);
      setHumidity(data.current.humidity);
    };

    // sideEffect();
  }, []);

  return (
    <>
      <Condition
        temperature={temperature}
        weather={weather}
        humidity={humidity}
      />
      <Form />
    </>
  );
};

export default App;
