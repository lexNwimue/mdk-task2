const getWeatherData = async () => {
  console.log(process.env.REACT_APP_WEATHER_API_KEY);
  let data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ba6d5db544504d49bcc143858222208&q=Lagos&aqi=no`
  );
  data = await data.json();
  return data;
};

export { getWeatherData };
