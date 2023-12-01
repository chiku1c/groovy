export const addCity = (city) => ({
  type: "ADD_CITY",
  payload: city,
});

export const switchCity = (city) => ({
  type: "SWITCH_CITY",
  payload: city,
});
