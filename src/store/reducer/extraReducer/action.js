import axios from "axios";

export const fetchExtraDetails = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,showers,snowfall&daily=sunrise,sunset"
      );
      dispatch({
        type: "FETCH_EXTRA_DETAILS",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching cities:", error.message);
    }
  };
};
