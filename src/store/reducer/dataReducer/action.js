import axios from "axios";

export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=22.6916&longitude=72.8634&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=sunrise,sunset"
      );
      dispatch({
        type: "FETCH_CITIES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching cities:", error.message);
    }
  };
};
