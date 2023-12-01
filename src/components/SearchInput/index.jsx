/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { addCity } from "../../store/reducer/cityReducer/cityReducer";

const SearchInput = ({
  searchCity,
  handleSearchInputChange,
  handleListMouseDown,
  setIsSearchInputFocused,
  isSearchInputFocused,
  listRef,
  filteredCities,
  newCity,
  setNewCity,
  newLat,
  setNewLat,
  newLong,
  setNewLong,
  handleSwitchCity,
  currentCity,
}) => {
  useEffect(() => {
    window.addEventListener("mousedown", handleListMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleListMouseDown);
    };
  }, []);

  const dispatch = useDispatch();

  const handleAddCity = () => {
    if (
      newCity.trim() === "" ||
      newLat.trim() === "" ||
      newLong.trim() === ""
    ) {
      window.alert(
        "Please provide valid values for City Name, Latitude, and Longitude"
      );
      return;
    }

    const cityObject = {
      name: newCity,
      lat: newLat,
      long: newLong,
    };

    dispatch(addCity(cityObject));
    setNewCity("");
    setNewLat("");
    setNewLong("");
  };

  return (
    <div id="app">
      <Grid container>
        <Grid item xs={6}>
          <TextField
            label="Search City"
            value={searchCity}
            type="search"
            onChange={handleSearchInputChange}
            onFocus={() => setIsSearchInputFocused(true)}
            onBlur={() => setIsSearchInputFocused(false)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
          />
          {isSearchInputFocused && (
            <List ref={listRef}>
              {filteredCities.map((city) => (
                <ListItem
                  style={{ cursor: "pointer" }}
                  key={city.name}
                  onMouseDown={() => handleSwitchCity(city)}
                >
                  <ListItemText primary={city.name} />
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
        <Grid item container xs={6} spacing={2} alignItems="center">
          <Grid item xs={3}>
            <TextField
              label="City Name"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Latitude"
              value={newLat}
              onChange={(e) => setNewLat(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Longitude"
              value={newLong}
              onChange={(e) => setNewLong(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={handleAddCity}>
              Add City
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {currentCity && (
        <p>
          Current City: {currentCity.name}, Lat: {currentCity.lat}, Long:{" "}
          {currentCity.long}
        </p>
      )}
    </div>
  );
};

export default SearchInput;
