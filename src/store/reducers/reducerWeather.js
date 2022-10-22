import { actionType } from "../actions/actionWeather";

const initialState = {
  weather: [],
  success: false,
  loading: false,
  error: false,
  city: "mogilev",
  days: 7,
};

export const reducerWeather = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.SET_WEATHER:
      return {
        ...state,
        weather: [],
        success: false,
        loading: true,
        city: "mogilev",
        days: 7,
      };

    case actionType.SET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        success: true,
        loading: false,
        city: "mogilev",
        days: 7,
      };

    case actionType.SET_WEATHER_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
