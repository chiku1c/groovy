import React from "react";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import Sun from "../../assest/image/clear 3.png";
import Navi from "../../assest/image/navigation.jpg";
import moment from "moment";

const HourlyForecast = (props) => {
  const { data } = props;
  const targetTimes = ["12:00", "15:00", "18:00", "21:00", "00:00"];
  const filterHourlyData = (hourlyData, targetTimes) => {
    return hourlyData?.time?.filter((time) => {
      return targetTimes.includes(
        new Date(time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    });
  };

  const filteredTimes = data?.hourly
    ? filterHourlyData(data?.hourly, targetTimes)
    : [];

  // Replace repeated times with "00:00"
  const uniqueTimes = Array.from(new Set(filteredTimes));
  const displayTimes = uniqueTimes.slice(0, 5);

  return (
    <>
      <Card
        sx={{
          borderRadius: "30px",
          background: "D9D9D9",
          height: "330px",
          padding: "12px 12px 0px 17px",
        }}
      >
        <Grid container sx={{ marginTop: "5px" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "292929",
                fontSize: "32px",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Hourly Forecast
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            {displayTimes?.slice(0, 5).map((filteredTime, index) => {
              const formattedTime =
                index === uniqueTimes.indexOf(filteredTime)
                  ? moment(filteredTime).format("H:mm")
                  : "00:00";

              const isLastElement = index === displayTimes.length - 1;
              const cardBackground =
                isLastElement || formattedTime === "21:00"
                  ? "linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)"
                  : "linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)";

              const wind_speed_10m = `${data?.hourly?.wind_speed_10m?.[index]} km/h`;

              return (
                <Grid item key={formattedTime}>
                  <Card
                    sx={{
                      borderRadius: "40px",
                      paddingTop: "10px",
                      width: "130px",
                      height: "270px",
                      background: cardBackground,
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            color: "292929",
                            fontSize: "46px",
                            fontWeight: 700,
                            textAlign: "center",
                            lineHeight: "normal",
                          }}
                        >
                          {isLastElement ? "00:00" : formattedTime}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IconButton sx={{ width: "80px", height: "80px" }}>
                          <img src={Sun} alt="clear3" />
                        </IconButton>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IconButton sx={{ width: "80px", height: "80px" }}>
                          <img src={Navi} alt="navi" />
                        </IconButton>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            color: "292929",
                            fontSize: "20px",
                            fontWeight: 700,
                            textAlign: "center",
                            lineHeight: "normal",
                          }}
                        >
                          {wind_speed_10m}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default HourlyForecast;
