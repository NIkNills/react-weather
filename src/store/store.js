import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducerWeather } from "./reducers/reducerWeather";

const composeEnhancers =
  window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  weather: reducerWeather,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
