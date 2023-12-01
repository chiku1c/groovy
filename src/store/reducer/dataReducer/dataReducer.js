const initialState = {
  currentCity: null,
  data: [],
};

const weatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CITIES":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default weatReducer;
