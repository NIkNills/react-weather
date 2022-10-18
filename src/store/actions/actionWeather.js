import axios from "axios";
import { API_KEY } from "../../config";

export const actionType = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCESS: "SET_WEATHER_SUCCESS",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",
  SET_WEATHER_CARD_IDX: "SET_WEATHER_CARD_IDX",
};

export const actionWeather = {
  getWeather: (days) => async (dispatch) => {
    dispatch({ type: actionType.SET_WEATHER });
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?q=mogilev&cnt=${days}&APPID=${API_KEY}&units=metric`
      )
      .then((response) =>
        dispatch({
          type: actionType.SET_WEATHER_SUCCESS,
          payload: response.data.list,
        })
      )
      .catch((err) => {
        console.log(err.response.err);
        dispatch({ type: actionType.SET_WEATHER_ERROR, payload: err.response });
      });
  },
};

export const actionWeatherCardIdx = (payload) => ({
  type: actionType.SET_WEATHER_CARD_IDX,
  payload,
});
