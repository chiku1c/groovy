const initialState = {
  extraData: [],
};

const extraReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXTRA_DETAILS":
      return {
        ...state,
        extraData: action.payload,
      };

    default:
      return state;
  }
};

export default extraReducer;
