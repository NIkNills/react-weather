import { actionType } from "../actions/actionWeather";

const initialState = {
  weather: [],
  success: false,
  loading: false,
  error: false,
  city: "mogilev",
  days: 7,
  popupArr: [],
};

export const reducerWeather = (state = initialState, action) => {
  const uniqArr = [];
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

    case actionType.SET_POPUP:
      return {
        ...state,
        popupArr: Array.from(new Set([...state.popupArr, payload])).filter(
          ({ dt }) => {
            if (!uniqArr.includes(dt)) {
              uniqArr.push(dt);
              return dt;
            }
          }
        ),
      };

      case actionType.SET_POPUP_CLEAR:
      return {
        ...state,
        popupArr: [],
      };

    default:
      return state;
  }
};
