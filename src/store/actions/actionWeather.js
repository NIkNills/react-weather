import axios from "axios";
import { API_KEY } from "../../config";

export const actionType = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCESS: "SET_WEATHER_SUCCESS",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",
  
  SET_POPUP: "SET_POPUP",
  SET_POPUP_CLEAR: "SET_POPUP_CLEAR",
};

export const actionWeather = {
  getWeather: (city, days) => async (dispatch) => {
    dispatch({ type: actionType.SET_WEATHER });
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&cnt=${days}&APPID=${API_KEY}&units=metric`
      )
      .then((response) =>
        dispatch({
          type: actionType.SET_WEATHER_SUCCESS,
          payload: response.data.list,
        })
      )
      .catch((err) => {
        dispatch({
          type: actionType.SET_WEATHER_ERROR,
          payload: err.response,
        });
      });
  },

  addPopup: (payload) => ({ type: actionType.SET_POPUP, payload }),

  clearPopup: (payload) => ({ type: actionType.SET_POPUP_CLEAR, payload }),
};
