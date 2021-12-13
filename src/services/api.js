import axios from "axios";

const API_KEY = "d71f9f297b539e3f48ad23af378ca4ad";
const URL = "api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
