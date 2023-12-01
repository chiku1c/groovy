export const addCity = (city) => ({
  type: "ADD_CITY",
  payload: city,
});

export const switchCity = (city) => ({
  type: "SWITCH_CITY",
  payload: city,
});

const initialState = {
  currentCity: null,
  cities: [
    { name: "Mumbai", lat: "19.0760", long: "72.8777" },
    { name: "Delhi", lat: "28.6139", long: "77.2090" },
    { name: "Bangalore", lat: "12.9716", long: "77.5946" },
  ],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    case "SWITCH_CITY":
      return {
        ...state,
        currentCity: action.payload,
      };

    default:
      return state;
  }
};

export default cityReducer;
