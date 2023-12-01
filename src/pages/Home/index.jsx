/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../store/reducer/dataReducer/action";
import SearchInput from "../../components/SearchInput";
import TimeCard from "../../components/TimeCard";
import TempCard from "../../components/TempCard";
import ForeCast from "../../components/Forecast";
import HourlyForecast from "../../components/HourlyForecast";
import {
  addCity,
  switchCity,
} from "../../store/reducer/cityReducer/cityReducer";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.weatherData);
  const cities = useSelector((state) => state.city);
  const currentCity = useSelector((state) => state.city.currentCity);
  const [searchCity, setSearchCity] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  useEffect(() => {
    setFilteredCities(cities.cities);
  }, [cities.cities]);

  const [newCityInfo, setNewCityInfo] = useState({
    newCity: "",
    newLat: "",
    newLong: "",
  });

  const handleAddCity = () => {
    const { newCity, newLat, newLong } = newCityInfo;
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
    setNewCityInfo({
      newCity: "",
      newLat: "",
      newLong: "",
    });
  };

  const handleSwitchCity = (city) => {
    dispatch(switchCity(city));
    setIsSearchInputFocused(false);
  };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchCity(searchTerm);

    const matchingCities = cities.cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(matchingCities);
  };

  const handleListMouseDown = (e) => {
    if (listRef.current && listRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Grid container spacing={4} rowGap={3}>
        <Grid item xs={12}>
          <SearchInput
            handleSearchInputChange={handleSearchInputChange}
            searchCity={searchCity}
            handleListMouseDown={handleListMouseDown}
            setIsSearchInputFocused={setIsSearchInputFocused}
            isSearchInputFocused={isSearchInputFocused}
            listRef={listRef}
            filteredCities={filteredCities}
            newCity={newCityInfo?.newCity}
            setNewCity={(value) =>
              setNewCityInfo((prev) => ({ ...prev, newCity: value }))
            }
            newLat={newCityInfo?.newLat}
            setNewLat={(value) =>
              setNewCityInfo((prev) => ({ ...prev, newLat: value }))
            }
            newLong={newCityInfo?.newLong}
            setNewLong={(value) =>
              setNewCityInfo((prev) => ({ ...prev, newLong: value }))
            }
            handleSwitchCity={handleSwitchCity}
            currentCity={currentCity}
            handleAddCity={handleAddCity}
          />
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={4}>
            <TimeCard {...state} />
          </Grid>
          <Grid item xs={8}>
            <TempCard {...state} />
          </Grid>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <ForeCast {...state} />
          </Grid>
          <Grid item xs={9}>
            <HourlyForecast {...state} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
