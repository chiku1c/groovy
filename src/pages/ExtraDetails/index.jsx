import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExtraDetails } from "../../store/reducer/extraReducer/action";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import moment from "moment";

const WeatherCard = ({ time, temperature, rain, showers, snowfall }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {moment(time).format("dddd, D MMMM")}
        </Typography>
        <Typography>Temperature: {temperature}°C</Typography>
        <Typography>Rain: {rain}mm</Typography>
        <Typography>Showers: {showers}mm</Typography>
        <Typography>Snowfall: {snowfall}cm</Typography>
      </CardContent>
    </Card>
  );
};

const ExtraDetails = () => {
  const state = useSelector((state) => state?.extraData);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExtraDetails());
  }, [dispatch]);

  if (!state?.extraData?.hourly) {
    // Handle the case when hourly data is not yet defined or data is still loading
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {state.extraData.hourly.time.map((time, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <WeatherCard
            time={time}
            temperature={state.extraData.hourly.temperature_2m?.[index]}
            rain={state.extraData.hourly.rain?.[index]}
            showers={state.extraData.hourly.showers?.[index]}
            snowfall={state.extraData.hourly.snowfall?.[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExtraDetails;
