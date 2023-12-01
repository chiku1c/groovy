import { combineReducers } from "redux";
import cityReducer from "./cityReducer/cityReducer";
import weatReducer from "./dataReducer/dataReducer";
import extraReducer from "./extraReducer/extraReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  weatherData: weatReducer,
  extraData: extraReducer,
});

export default rootReducer;
